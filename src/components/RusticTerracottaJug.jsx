import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaBolt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./Rustic.css";

const productData = {
  "3": {
    title: "Vintage Flower Vase",
    description: "An elegant vintage-style vase perfect for displaying your favorite blooms. This vase adds a touch of classic charm to any room, crafted with delicate details and a timeless design.",
    price: 30,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcAgKo7UOaa0zDm-cWm5JTUwRFU6YFPq5iA&s",
      "https://m.media-amazon.com/images/I/71X0q8E20cL._AC_UF1000,1000_QL80_.jpg",
      "https://i.etsystatic.com/20268710/r/il/30412f/3201460331/il_fullxfull.3201460331_f73t.jpg",
    ],
    offers: "💐 Free flower seeds with every purchase!",
    deliveryBy: "🚚 Estimated Delivery: 28th February, 2025",
    seller: "🌸 Floral Elegance",
    rating: 4.6,
  },
  "4": {
    title: "Rustic Terracotta Jug",
    description: "A classic terracotta jug that brings a rustic touch to your home decor. Handcrafted with traditional techniques, it's perfect for serving water or as a decorative piece.",
    price: 35,
    images: [
      "https://i.etsystatic.com/36919488/c/2250/2250/0/507/il/3636c5/5300824853/il_600x600.5300824853_50d8.jpg",
      "https://i.pinimg.com/originals/8d/3d/29/8d3d297b80ef5c8d6cf2db2a65ed64f6.jpg",
      "https://img3.exportersindia.com/product_images/bc-full/dir_86/2568604/clay-jug-1499853.jpg",
    ],
    offers: "🌿 Eco-friendly & handmade with love!",
    deliveryBy: "🚚 Estimated Delivery: 2nd March, 2025",
    seller: "🏺 Rustic Creations",
    rating: 4.8,
  },
};

const RTJ = () => {
  const { productId } = useParams();
  const product = productData[productId]; // Fetch product details dynamically
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found!</h2>
        <Link to="/shop" className="back-button">
          ← Back to Shop
        </Link>
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
        <p>
          <strong>Offers:</strong> <span className="highlight">{product.offers}</span>
        </p>
        <p>
          <strong>Delivery By:</strong> {product.deliveryBy}
        </p>
        <p>
          <strong>Seller:</strong> {product.seller}
        </p>

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
        <Link to="/shop" className="back-button">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
};

export default RTJ;
