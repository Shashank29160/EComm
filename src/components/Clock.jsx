import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaClock } from "react-icons/fa";
import "./ProductPage.css"; // Ensure this file exists

const clock = {
  title: "Vintage Wall Clock",
  description: "Elegant vintage-style wall clock with a silent mechanism, perfect for any home or office.",
  price: 120,
  images: [
    "https://cdn.shopify.com/s/files/1/0745/6891/files/E._Howard_Co._No._36_Regulator_grande.jpg?v=1598968860",
    "https://cdn.shopify.com/s/files/1/0745/6891/files/E._Howard_Co._No._36_Regulator_grande.jpg?v=1598968860",
    "https://cdn.shopify.com/s/files/1/0745/6891/files/E._Howard_Co._No._36_Regulator_grande.jpg?v=1598968860",
  ],
  offers: "⏳ 20% off for a limited time!",
  deliveryBy: "🚚 Estimated Delivery: 5th March, 2025",
  seller: "🛍️ Timeless Creations",
  rating: 4.6,
};

const ClockComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? clock.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === clock.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={clock.images[currentImage]} alt={clock.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {clock.images.map((img, index) => (
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
        <h1 className="product-title">{clock.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaClock key={i} className={i < Math.floor(clock.rating) ? "star" : "star gray"} />
          ))}
          <span className="rating-text">({clock.rating})</span>
        </div>

        <p className="product-description">{clock.description}</p>
        <h2 className="price">${clock.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{clock.offers}</span></p>
        <p><strong>Delivery By:</strong> {clock.deliveryBy}</p>
        <p><strong>Seller:</strong> {clock.seller}</p>

        {/* View Product Button */}
        <Link to="/clock" className="view-product-btn">VIEW PRODUCT</Link>

        {/* Back to Shop */}
        <Link to="/shop" className="back-button">← Back to Shop</Link>
      </div>
    </div>
  );
};

export default ClockComponent;
