import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaShoppingCart, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductPage.css"; 

const goldProduct = {
  title: "Handcrafted Gold Earrings",
  description: "Elegant handcrafted gold earrings with intricate design, perfect for special occasions.",
  price: 150,
  images: [
    "https://updatelife.in/wp-content/uploads/2024/05/AERS7.jpg",
    "https://updatelife.in/wp-content/uploads/2024/05/AERS7.jpg",
    "https://updatelife.in/wp-content/uploads/2024/05/AERS7.jpg",
  ],
  offers: "✨ Limited Offer: 15% off on your first purchase!",
  deliveryBy: "🚚 Estimated Delivery: 5th March, 2025",
  seller: "💎 Royal Jewelry Collection",
  rating: 4.7,
};

const Gold = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? goldProduct.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === goldProduct.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={goldProduct.images[currentImage]} alt={goldProduct.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {goldProduct.images.map((img, index) => (
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
        <h1 className="product-title">{goldProduct.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 0.5 === goldProduct.rating ? <FaStarHalfAlt key={i} className="star" /> :
            i < goldProduct.rating ? <FaStar key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({goldProduct.rating})</span>
        </div>

        <p className="product-description">{goldProduct.description}</p>
        <h2 className="price">${goldProduct.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{goldProduct.offers}</span></p>
        <p><strong>Delivery By:</strong> {goldProduct.deliveryBy}</p>
        <p><strong>Seller:</strong> {goldProduct.seller}</p>

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

export default Gold;
