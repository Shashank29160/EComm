import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaShoppingCart, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductPage.css"; 

const ringProduct = {
  title: "Gemstone Ring",
  description: "Beautiful gemstone ring with a polished silver band.",
  price: 75,
  images: [
    "https://rubans.in/cdn/shop/files/gold-plated-cz-stone-studded-with-green-stone-ring-rings-37193442623662_1800x1800.jpg?v=1727826746", // Replace with correct URL
    "https://rubans.in/cdn/shop/files/gold-plated-cz-stone-studded-with-green-stone-ring-rings-37193442623662_1800x1800.jpg?v=1727826746",
    "https://rubans.in/cdn/shop/files/gold-plated-cz-stone-studded-with-green-stone-ring-rings-37193442623662_1800x1800.jpg?v=1727826746",
  ],
  offers: "🎉 Special Offer: 10% off on all rings this week!",
  deliveryBy: "🚚 Estimated Delivery: 10th March, 2025",
  seller: "💎 Luxury Rings Collection",
  rating: 4.6,
};

const Ring = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? ringProduct.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === ringProduct.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={ringProduct.images[currentImage]} alt={ringProduct.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {ringProduct.images.map((img, index) => (
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
        <h1 className="product-title">{ringProduct.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 0.5 === ringProduct.rating ? <FaStarHalfAlt key={i} className="star" /> :
            i < ringProduct.rating ? <FaStar key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({ringProduct.rating})</span>
        </div>

        <p className="product-description">{ringProduct.description}</p>
        <h2 className="price">${ringProduct.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{ringProduct.offers}</span></p>
        <p><strong>Delivery By:</strong> {ringProduct.deliveryBy}</p>
        <p><strong>Seller:</strong> {ringProduct.seller}</p>

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

export default Ring;
