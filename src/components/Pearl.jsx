import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaShoppingCart, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const pearlProduct = {
  title: "Pearl Bracelet",
  description: "Elegant pearl bracelet with a timeless charm.",
  price: 110,
  images: [
    "https://nemichandjewels.com/cdn/shop/files/DSC8031.jpg?v=1684065573&width=1946", 
    "https://nemichandjewels.com/cdn/shop/files/DSC8031.jpg?v=1684065573&width=1946",
    "https://nemichandjewels.com/cdn/shop/files/DSC8031.jpg?v=1684065573&width=1946",
  ],
  offers: "✨ Exclusive Offer: 10% off on first order!",
  deliveryBy: "🚚 Estimated Delivery: 7th March, 2025",
  seller: "💎 Artisan Jewelry Creations",
  rating: 4.8,
};

const Pearl = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? pearlProduct.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === pearlProduct.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={pearlProduct.images[currentImage]} alt={pearlProduct.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {pearlProduct.images.map((img, index) => (
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
        <h1 className="product-title">{pearlProduct.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 0.5 === pearlProduct.rating ? <FaStarHalfAlt key={i} className="star" /> :
            i < pearlProduct.rating ? <FaStar key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({pearlProduct.rating})</span>
        </div>

        <p className="product-description">{pearlProduct.description}</p>
        <h2 className="price">${pearlProduct.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{pearlProduct.offers}</span></p>
        <p><strong>Delivery By:</strong> {pearlProduct.deliveryBy}</p>
        <p><strong>Seller:</strong> {pearlProduct.seller}</p>

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

export default Pearl;
