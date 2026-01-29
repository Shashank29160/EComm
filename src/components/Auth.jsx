import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const Auth = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("http://localhost:5000/send-otp", { email: formData.email });
      setOtpSent(true);
      setSuccess(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("http://localhost:5000/verify-otp", { email: formData.email, otp });
      setSuccess("OTP verified successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("http://localhost:5000/signup", formData);
      setSuccess(res.data.message);
      setIsActive(false);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", res.data.token);
      setSuccess("Login successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className={`auth-container ${isActive ? "auth-active" : ""}`}>
        <div className="auth-form-container auth-sign-in">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="auth-form-container auth-sign-up">
          <form onSubmit={otpSent ? verifyOtp : handleSignUp}>
            <h1>Create Account</h1>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            {!otpSent ? (
              <button type="button" onClick={sendOtp}>Send OTP</button>
            ) : (
              <>
                <input type="text" name="otp" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required />
                <button type="submit">Verify OTP</button>
              </>
            )}
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
          </form>
        </div>

        <div className="auth-toggle-container">
          <div className="auth-toggle">
            <div className="auth-toggle-panel auth-toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your details to sign in</p>
              <button onClick={() => setIsActive(false)}>Sign In</button>
            </div>
            <div className="auth-toggle-panel auth-toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register to access site features</p>
              <button onClick={() => setIsActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
