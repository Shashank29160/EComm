import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaBolt, FaStar, FaStarHalfAlt } from "react-icons/fa"; 
import "./ProductPage.css"; 

const productData = {
  "1": {
    title: "Handcrafted Clay Pot",
    description: "A beautiful handcrafted clay pot, perfect for home décor. Made with high-quality clay and detailed craftsmanship.",
    price: 25,
    images: [
      "https://png.pngtree.com/png-clipart/20210309/original/pngtree-black-numbers-cool-no.-1-png-image_5894151.jpg",
      "https://e7.pngegg.com/pngimages/414/624/png-clipart-brand-black-and-white-angle-number-2-text-monochrome.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzcig9q7uPR8rcb_IchTVPqS5JqGzzEojQw&s",
    ],
    offers: "✨ 10% off on first purchase!",
    deliveryBy: "🚚 Estimated Delivery: 25th February, 2025",
    seller: "🛍️ Artisan Creations",
    rating: 4.5,
  },
};

const ProductPage = () => {
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

export default ProductPage;
