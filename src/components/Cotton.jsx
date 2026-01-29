import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaShoppingCart, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductPage.css"; 

const cottonProduct = {
    title: "Block Printed Cotton Dupatta",
    description: "Lightweight cotton dupatta with beautiful block printing, perfect for ethnic and casual wear.",
    price: 45,
    images: [
      "https://shilphaat.com/wp-content/uploads/2020/10/Indigo-dabu-block-printed-silk-cotton-dupatta-shilphaat.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/1/EM/VL/WB/20110398/block-printed-cotton-dupatta-500x500.jpg",
      "https://cdn.shopify.com/s/files/1/0276/4848/2385/products/IMG_2905_800x.jpg?v=1679650248",
    ],
    offers: "🎉 Buy 2, Get 5% Off!",
    deliveryBy: "🚚 Estimated Delivery: 28th February, 2025",
    seller: "🛍️ Ethnic Weaves",
    rating: 4.2,
  };
  
  const Cotton = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const handlePrevImage = () => {
      setCurrentImage((prev) => (prev === 0 ? cottonProduct.images.length - 1 : prev - 1));
    };
  
    const handleNextImage = () => {
      setCurrentImage((prev) => (prev === cottonProduct.images.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="product-container">
        {/* Image Carousel */}
        <div className="image-slider">
          <button className="carousel-btn left" onClick={handlePrevImage}>
            <FaChevronLeft />
          </button>
          <img src={cottonProduct.images[currentImage]} alt={cottonProduct.title} className="main-image" />
          <button className="carousel-btn right" onClick={handleNextImage}>
            <FaChevronRight />
          </button>
          <div className="thumbnails">
            {cottonProduct.images.map((img, index) => (
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
          <h1 className="product-title">{cottonProduct.title}</h1>
  
          {/* Rating System */}
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              i + 0.5 === cottonProduct.rating ? <FaStarHalfAlt key={i} className="star" /> :
              i < cottonProduct.rating ? <FaStar key={i} className="star" /> :
              <FaStar key={i} className="star gray" />
            ))}
            <span className="rating-text">({cottonProduct.rating})</span>
          </div>
  
          <p className="product-description">{cottonProduct.description}</p>
          <h2 className="price">${cottonProduct.price}</h2>
          <p><strong>Offers:</strong> <span className="highlight">{cottonProduct.offers}</span></p>
          <p><strong>Delivery By:</strong> {cottonProduct.deliveryBy}</p>
          <p><strong>Seller:</strong> {cottonProduct.seller}</p>
  
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
  
  export default Cotton;