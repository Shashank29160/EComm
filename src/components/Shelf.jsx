import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaBolt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ProductPage.css";

const shelf = {
  title: "Decorative Wooden Shelf",
  description: "An elegant wooden shelf designed to enhance the beauty of your space. Handcrafted with intricate detailing.",
  price: 150,
  images: [
    "https://images-cdn.ubuy.co.in/6MWWWNCK-makenza-dragon-wall-shelf-home.jpg",
    "https://images-cdn.ubuy.co.in/6MWWWNCK-makenza-dragon-wall-shelf-home.jpg",
    "https://images-cdn.ubuy.co.in/6MWWWNCK-makenza-dragon-wall-shelf-home.jpg",
  ],
  offers: "🎉 10% off for a limited time!",
  deliveryBy: "🚚 Estimated Delivery: 5th March, 2025",
  seller: "🛍️ Crafted Creations",
  rating: 4.6,
};

const Shelf = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? shelf.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === shelf.images.length - 1 ? 0 : prev + 1));
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
        <img src={shelf.images[currentImage]} alt={shelf.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {shelf.images.map((img, index) => (
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
        <h1 className="product-title">{shelf.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 1 <= shelf.rating ? <FaStar key={i} className="star" /> :
            i + 0.5 <= shelf.rating ? <FaStarHalfAlt key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({shelf.rating})</span>
        </div>

        <p className="product-description">{shelf.description}</p>
        <h2 className="price">${shelf.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{shelf.offers}</span></p>
        <p><strong>Delivery By:</strong> {shelf.deliveryBy}</p>
        <p><strong>Seller:</strong> {shelf.seller}</p>

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
        <Link to="/woodwork/shelf" className="view-product-btn">VIEW PRODUCT</Link>

        {/* Back to Shop */}
        <Link to="/shop" className="back-button">← Back to Shop</Link>
      </div>
    </div>
  );
};

export default Shelf;
