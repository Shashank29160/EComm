import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaBolt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ProductPage.css";

const table = {
  title: "Rustic Wooden Table",
  description: "A sturdy and stylish wooden table, perfect for dining or workspaces. Handcrafted with premium quality wood.",
  price: 320,
  images: [
    "https://i.etsystatic.com/10372732/r/il/e45f70/3898271761/il_570xN.3898271761_7sw1.jpg",
    "https://i.etsystatic.com/10372732/r/il/e45f70/3898271761/il_570xN.3898271761_7sw1.jpg",
    "https://i.etsystatic.com/10372732/r/il/e45f70/3898271761/il_570xN.3898271761_7sw1.jpg",
  ],
  offers: "🎉 15% off for a limited time!",
  deliveryBy: "🚚 Estimated Delivery: 3rd March, 2025",
  seller: "🛍️ Elite Woodcraft",
  rating: 4.7,
};

const Table = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? table.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === table.images.length - 1 ? 0 : prev + 1));
  };

  const handleBuyNow = () => {
    navigate("/checkout"); // Redirects to checkout page
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={table.images[currentImage]} alt={table.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {table.images.map((img, index) => (
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
        <h1 className="product-title">{table.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 1 <= table.rating ? <FaStar key={i} className="star" /> :
            i + 0.5 <= table.rating ? <FaStarHalfAlt key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({table.rating})</span>
        </div>

        <p className="product-description">{table.description}</p>
        <h2 className="price">${table.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{table.offers}</span></p>
        <p><strong>Delivery By:</strong> {table.deliveryBy}</p>
        <p><strong>Seller:</strong> {table.seller}</p>

        {/* Action Buttons */}
        <div className="buttons">
          <button className="add-to-cart">
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="buy-now" onClick={handleBuyNow}>
            <FaBolt /> Buy Now
          </button>
        </div>

        {/* View Product Button */}
        <Link to="/wooden-table" className="view-product-btn">VIEW PRODUCT</Link>

        {/* Back to Shop */}
        <Link to="/shop" className="back-button">← Back to Shop</Link>
      </div>
    </div>
  );
};

export default Table;
