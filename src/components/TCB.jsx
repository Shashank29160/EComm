import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaBolt, FaStar, FaStarHalfAlt } from "react-icons/fa"; 
import "./TCB.css"; 

const productData = {
  "2": {
    title: "Traditional Ceramic Bowl",
    description: "A stunning ceramic bowl meticulously crafted by skilled artisans. Each piece showcases traditional techniques blended with contemporary design, perfect for both decorative and practical use.",
    price: 30,
    images: [
      "https://cdn.vibecity.in/providers/63086c90121c8f0011ef45b5/KM-005-0771_41049baa-7f10-4209-ad74-65758a13eed9-3X.png",
      "https://img.freepik.com/free-photo/ceramic-bowl-handmade-clay-pottery_1150-14563.jpg",
      "https://img.freepik.com/free-photo/ceramic-bowl-with-blue-pattern_1150-14561.jpg",
    ],
    offers: "🎁 Free gift wrapping available!",
    deliveryBy: "🚚 Estimated Delivery: 26th February, 2025",
    seller: "🏺 Ceramic Craftworks",
    rating: 4.8,
  },
};

const TCB = () => {
  const { productId } = useParams();
  const product = productData[productId];
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found!</h2>
        <Link to="/shop" className="back-button">← Back to Shop</Link>
      </div>
    );
  }

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={product.images[currentImage]} alt={product.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {product.images.map((img, index) => (
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
        <h1 className="product-title">{product.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 0.5 === product.rating ? <FaStarHalfAlt key={i} className="star" /> :
            i < product.rating ? <FaStar key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({product.rating})</span>
        </div>

        <p className="product-description">{product.description}</p>
        <h2 className="price">${product.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{product.offers}</span></p>
        <p><strong>Delivery By:</strong> {product.deliveryBy}</p>
        <p><strong>Seller:</strong> {product.seller}</p>

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

export default TCB;