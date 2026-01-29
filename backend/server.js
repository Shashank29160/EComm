require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
 
// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "ecommerce",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.message);
    process.exit(1);
  } else {
    console.log("✅ MySQL Database Connected");
  }
});

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// OTP Storage
const otpStore = {};

// 🟢 User Signup with OTP
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
      if (err) {
        console.error("❌ Error checking existing user:", err);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
      }

      if (result.length > 0) {
        return res.status(400).json({ success: false, message: "Email already registered" });
      }

      // Generate and send OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      otpStore[email] = otp;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP for Verification",
        text: `Your OTP is: ${otp}`,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.error("❌ Error sending OTP email:", error);
          return res.status(500).json({ success: false, message: "Failed to send OTP" });
        }
        res.status(200).json({ success: true, message: "OTP sent to email" });
      });
    });
  } catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// 🟢 Verify OTP and Complete Registration
app.post("/verify-otp", async (req, res) => {
  try {
    const { name, email, password, otp } = req.body;
    if (otpStore[email] !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("❌ Error inserting user:", err);
        return res.status(500).json({ success: false, error: "Failed to register user" });
      }

      delete otpStore[email];
      res.status(201).json({ success: true, message: "User registered successfully" });
    });
  } catch (error) {
    console.error("❌ Verification error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
