import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaBolt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ProductPage.css"; 

const chair = {
  title: "Handcrafted Wooden Chair",
  description: "Beautifully carved wooden chair with a classic finish. Perfect for adding elegance and comfort to your living space.",
  price: 250,
  images: [
    "https://www.squaro.in/cdn/shop/files/EF3D6586-9F78-415A-A360-379F5F11EA78.png?v=1732986505",
    "https://www.squaro.in/cdn/shop/files/EF3D6586-9F78-415A-A360-379F5F11EA78.png?v=1732986505",
    "https://www.squaro.in/cdn/shop/files/EF3D6586-9F78-415A-A360-379F5F11EA78.png?v=1732986505",
  ],
  offers: "🎉 10% off on first purchase!",
  deliveryBy: "🚚 Estimated Delivery: 28th February, 2025",
  seller: "🛍️ Premium Wooden Works",
  rating: 4.8,
};

const Chair = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? chair.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === chair.images.length - 1 ? 0 : prev + 1));
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
        <img src={chair.images[currentImage]} alt={chair.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {chair.images.map((img, index) => (
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
        <h1 className="product-title">{chair.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 1 <= chair.rating ? <FaStar key={i} className="star" /> :
            i + 0.5 <= chair.rating ? <FaStarHalfAlt key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({chair.rating})</span>
        </div>

        <p className="product-description">{chair.description}</p>
        <h2 className="price">${chair.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{chair.offers}</span></p>
        <p><strong>Delivery By:</strong> {chair.deliveryBy}</p>
        <p><strong>Seller:</strong> {chair.seller}</p>

        {/* Action Buttons */}
        <div className="buttons">
          <button className="add-to-cart">
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="buy-now" onClick={handleBuyNow}>
            <FaBolt /> Buy Now
          </button>
        </div>

        {/* View Product Button (Redirects to Chair page) */}
        <Link to="/wooden-chair" className="view-product-btn">VIEW PRODUCT</Link>

        {/* Back to Shop */}
        <Link to="/shop" className="back-button">← Back to Shop</Link>
      </div>
    </div>
  );
};

export default Chair;
