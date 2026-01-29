import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaShoppingCart, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductPage.css"; 

const shawlProduct = {
  title: "Handmade Wool Shawl",
  description: "Warm and stylish wool shawl with fine handwork, perfect for cold seasons and traditional wear.",
  price: 90,
  images: [
    "https://kepra.in/cdn/shop/files/IMG_3257.jpg?v=1733900069&width=1080",
    "https://www.kashmirbox.com/cdn/shop/products/KCSWSA014_800x.jpg?v=1634293120",
    "https://www.kashmirbox.com/cdn/shop/products/KCSWSA022_800x.jpg?v=1634293138",
  ],
  offers: "🎉 Get 10% off on orders above $150!",
  deliveryBy: "🚚 Estimated Delivery: 28th February, 2025",
  seller: "🛍️ Artisan Creations",
  rating: 4.5,
};

const Shawl = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? shawlProduct.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === shawlProduct.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={shawlProduct.images[currentImage]} alt={shawlProduct.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {shawlProduct.images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setCurrentImage(index)}
              className={currentImage === index ? "active" : ""}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="product-info">
        <h1 className="product-title">{shawlProduct.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 0.5 === shawlProduct.rating ? <FaStarHalfAlt key={i} className="star" /> :
            i < shawlProduct.rating ? <FaStar key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({shawlProduct.rating})</span>
        </div>

        <p className="product-description">{shawlProduct.description}</p>
        <h2 className="price">${shawlProduct.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{shawlProduct.offers}</span></p>
        <p><strong>Delivery By:</strong> {shawlProduct.deliveryBy}</p>
        <p><strong>Seller:</strong> {shawlProduct.seller}</p>

        {/* Action Buttons */}
        <div className="buttons">
          <button className="add-to-cart">
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="buy-now">
            <FaBolt /> Buy Now
          </button>
        </div>

        {/* Back to Shop */}
        <Link to="/shop" className="back-button">← Back to Shop</Link>
      </div>
    </div>
  );
};

export default Shawl;
