import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaBolt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./ProductPage.css"; 

const kurti = {
  title: "Cotton Embroidered Kurti",
  description: "Beautiful cotton kurti with intricate embroidery, perfect for casual and festive occasions.",
  price: 60,
  images: [
    "https://www.libas.in/cdn/shop/files/8_f7e2dd15-710b-4f15-8d21-c8ebcaf3430b.jpg?v=1738939913",
    "https://cdn.shopify.com/s/files/1/0556/0852/7294/products/1_541f6a15-f354-4876-93ac-c1a4e2f0f43c.jpg?v=1651856323",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/top/q/o/j/m-fh-top-002-navy-blue-fab-hind-original-imagqfyfuzgxh2xy.jpeg?q=70",
  ],
  offers: "🎉 10% off on first purchase!",
  deliveryBy: "🚚 Estimated Delivery: 28th February, 2025",
  seller: "🛍️ Ethnic Wear Hub",
  rating: 4.5,
};

const Kurti = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? kurti.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === kurti.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="image-slider">
        <button className="carousel-btn left" onClick={handlePrevImage}>
          <FaChevronLeft />
        </button>
        <img src={kurti.images[currentImage]} alt={kurti.title} className="main-image" />
        <button className="carousel-btn right" onClick={handleNextImage}>
          <FaChevronRight />
        </button>
        <div className="thumbnails">
          {kurti.images.map((img, index) => (
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
        <h1 className="product-title">{kurti.title}</h1>

        {/* Rating System */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            i + 0.5 === kurti.rating ? <FaStarHalfAlt key={i} className="star" /> :
            i < kurti.rating ? <FaStar key={i} className="star" /> :
            <FaStar key={i} className="star gray" />
          ))}
          <span className="rating-text">({kurti.rating})</span>
        </div>

        <p className="product-description">{kurti.description}</p>
        <h2 className="price">${kurti.price}</h2>
        <p><strong>Offers:</strong> <span className="highlight">{kurti.offers}</span></p>
        <p><strong>Delivery By:</strong> {kurti.deliveryBy}</p>
        <p><strong>Seller:</strong> {kurti.seller}</p>

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

export default Kurti;
