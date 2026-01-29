import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chair from "./Chair";
import Table from "./Table";  
import Shelf from "./Shelf";  // ✅ Import Shelf.jsx
import "./woodwork.css";

const woodworkProducts = [
  {
    id: 1,
    name: "Handcrafted Wooden Chair",
    price: "$250",
    image: "https://www.squaro.in/cdn/shop/files/EF3D6586-9F78-415A-A360-379F5F11EA78.png?v=1732986505",
    description: "Beautifully carved wooden chair with a classic finish.",
    link: "/woodwork/chair"
  },
  {
    id: 2,
    name: "Rustic Wooden Table",
    price: "$320",
    image: "https://i.etsystatic.com/10372732/r/il/e45f70/3898271761/il_570xN.3898271761_7sw1.jpg",
    description: "A sturdy rustic wooden table perfect for any home.",
    link: "/woodwork/table"
  },
  {
    id: 3,
    name: "Decorative Wooden Shelf",
    price: "$150",
    image: "https://images-cdn.ubuy.co.in/6MWWWNCK-makenza-dragon-wall-shelf-home.jpg",
    description: "Elegant wooden shelf to add charm to your space.",
    link: "/woodwork/shelf"
  },
  {
    id: 4,
    name: "Vintage Wooden Clock",
    price: "$180",
    image: "https://cdn.shopify.com/s/files/1/0745/6891/files/E._Howard_Co._No._36_Regulator_grande.jpg?v=1598968860",
    description: "Timeless vintage wooden clock for your home.",
    link: "/clock" // ✅ FIXED PATH
  }
];

const Woodwork = () => {
  return (
    <div className="woodwork-container">
      <h1>Woodwork Collection</h1>
      <p>Explore our finest handcrafted wooden products.</p>

      {/* Product Grid */}
      <div className="products-grid">
        {woodworkProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} loading="lazy" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <Link to={product.link} className="buy-button">VIEW PRODUCT</Link>
          </div>
        ))}
      </div>

      {/* Routes for individual products */}
      <Routes>
        <Route path="chair" element={<Chair />} />
        <Route path="table" element={<Table />} />  
        <Route path="shelf" element={<Shelf />} />  
      </Routes>
    </div>
  );
};

export default Woodwork;
