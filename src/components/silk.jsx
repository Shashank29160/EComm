import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaBolt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ProductPage.css"; 

const silkSaree = {
  title: "Handwoven Silk Saree",
  description: "Exquisite handwoven silk saree featuring traditional motifs and intricate craftsmanship. A must-have for festive and special occasions.",
  price: 200,
  images: [
    "https://cdn.vibecity.in/providers/62924f91a147b70011418f7f/1000004216_0798f623-c7b4-4471-b8d3-7fd14a4d1d68-3X.png",
    "https://cdn.vibecity.in/providers/62924f91a147b70011418f7f/1000004216_0798f623-c7b4-4471-b8d3-7fd14a4d1d68-3X.png",
    "https://cdn.vibecity.in/providers/62924f91a147b70011418f7f/1000004216_0798f623-c7b4-4471-b8d3-7fd14a4d1d68-3X.png",
  ],
  offers: "🎉 15% off on first purchase!",
  deliveryBy: "🚚 Estimated Delivery: 28th February, 2025",
  seller: "🛍️ Ethnic Handlooms",
  rating: 4.7,
};

const Silk = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? silkSaree.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === silkSaree.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={silkSaree.images[currentImage]} alt={silkSaree.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {silkSaree.images.map((img, index) => (
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
        <h1 className="product-title">{silkSaree.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 0.5 === silkSaree.rating ? <FaStarHalfAlt key={i} className="star" /> :
            i < silkSaree.rating ? <FaStar key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({silkSaree.rating})</span>
        </div>

        <p className="product-description">{silkSaree.description}</p>
        <h2 className="price">${silkSaree.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{silkSaree.offers}</span></p>
        <p><strong>Delivery By:</strong> {silkSaree.deliveryBy}</p>
        <p><strong>Seller:</strong> {silkSaree.seller}</p>

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

export default Silk;
