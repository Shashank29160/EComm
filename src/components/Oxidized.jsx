import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaShoppingCart, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductPage.css"; // Ensure this file is correctly placed in your project

const oxidizedProduct = {
  title: "Silver Oxidized Necklace",
  description: "Traditional silver oxidized necklace, perfect for special occasions.",
  price: 90,
  images: [
    "https://www.teejh.com/cdn/shop/products/TEJ1002_2_1800x1800.jpg?v=1651131166",
    "https://www.teejh.com/cdn/shop/products/TEJ1002_2_1800x1800.jpg?v=1651131166",
    "https://www.teejh.com/cdn/shop/products/TEJ1002_2_1800x1800.jpg?v=1651131166",
  ],
  offers: "🎉 Special Offer: 10% discount for new customers!",
  deliveryBy: "🚚 Estimated Delivery: 7th March, 2025",
  seller: "✨ Ethnic Jewelry Emporium",
  rating: 4.5,
};

const Oxidized = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? oxidizedProduct.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === oxidizedProduct.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={oxidizedProduct.images[currentImage]} alt={oxidizedProduct.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {oxidizedProduct.images.map((img, index) => (
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
        <h1 className="product-title">{oxidizedProduct.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 0.5 === oxidizedProduct.rating ? <FaStarHalfAlt key={i} className="star" /> :
            i < oxidizedProduct.rating ? <FaStar key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({oxidizedProduct.rating})</span>
        </div>

        <p className="product-description">{oxidizedProduct.description}</p>
        <h2 className="price">${oxidizedProduct.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{oxidizedProduct.offers}</span></p>
        <p><strong>Delivery By:</strong> {oxidizedProduct.deliveryBy}</p>
        <p><strong>Seller:</strong> {oxidizedProduct.seller}</p>

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

export default Oxidized;
