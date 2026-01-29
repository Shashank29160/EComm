import React from "react";
import { Link } from "react-router-dom";
import "./JewelryProductsPage.css"; 

const jewelryProducts = [
  {
    id: 1,
    name: "Handcrafted Gold Earrings",
    price: "$150",
    image: "https://updatelife.in/wp-content/uploads/2024/05/AERS7.jpg",
    description: "Elegant handcrafted gold earrings with intricate design.",
    link: "/products/gold-earrings"  
  },
  {
    id: 2,
    name: "Silver Oxidized Necklace",
    price: "$90",
    image: "https://www.teejh.com/cdn/shop/products/TEJ1002_2_1800x1800.jpg?v=1651131166",
    description: "Traditional silver oxidized necklace, perfect for special occasions.",
    link: "/products/silver-oxidized-necklace"  
  },
  {
    id: 3,
    name: "Gemstone Ring",
    price: "$75",
    image: "https://rubans.in/cdn/shop/files/gold-plated-cz-stone-studded-with-green-stone-ring-rings-37193442623662_1800x1800.jpg?v=1727826746",
    description: "Beautiful gemstone ring with a polished silver band.",
    link: "/products/gemstone-ring"  
  },
  {
    id: 4,
    name: "Pearl Bracelet",
    price: "$110",
    image: "https://nemichandjewels.com/cdn/shop/files/DSC8031.jpg?v=1684065573&width=1946",
    description: "Elegant pearl bracelet with a timeless charm.",
    link: "/products/pearl-bracelet"
  }
];

const JewelryProductsPage = () => {
  return (
    <div className="jewelry-container">
      <h1>Jewelry Products</h1>
      <div className="products-grid">
        {jewelryProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} loading="lazy" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <Link to={product.link} className="buy-button">View Product</Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryProductsPage;
