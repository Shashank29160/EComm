import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  // Image slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/1477857305/photo/indian-man-weaving-textiles-in-rajasthan.jpg?s=612x612&w=0&k=20&c=2Y-AbmS0k4XjO7U-4KAb8TqRRsdVkiVSuNbxMl09iDQ=",
    "https://media.istockphoto.com/id/1477857305/photo/indian-man-weaving-textiles-in-rajasthan.jpg?s=612x612&w=0&k=20&c=2Y-AbmS0k4XjO7U-4KAb8TqRRsdVkiVSuNbxMl09iDQ=",
    "https://media.istockphoto.com/id/1477857305/photo/indian-man-weaving-textiles-in-rajasthan.jpg?s=612x612&w=0&k=20&c=2Y-AbmS0k4XjO7U-4KAb8TqRRsdVkiVSuNbxMl09iDQ="
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Best-selling products data
  const bestSellingProducts = [
    { id: 1, title: "Handmade Pottery", imgSrc: "product1.jpg", price: "$25" },
    { id: 2, title: "Wooden Crafts", imgSrc: "product2.jpg", price: "$30" },
    { id: 3, title: "Artisan Jewelry", imgSrc: "product3.jpg", price: "$40" },
  ];

  // Customer testimonials data
  const testimonials = [
    { id: 1, text: "Amazing products! I love my new pottery!", author: "Jane Doe" },
    { id: 2, text: "The craftsmanship is outstanding. Highly recommend!", author: "John Smith" },
    { id: 3, text: "Beautiful handmade items. Will definitely buy again!", author: "Emily Johnson" },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // New arrivals data
  const newArrivals = [
    { id: 1, title: "New Handmade Pottery", imgSrc: "new_product1.jpg", price: "$30" },
    { id: 2, title: "New Wooden Crafts", imgSrc: "new_product2.jpg", price: "$35" },
    { id: 3, title: "New Artisan Jewelry", imgSrc: "new_product3.jpg", price: "$45" },
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Image Slider */}
      <section className="hero">
        <div className="hero-slider">
          <img src={images[currentIndex]} alt="Artisan at work" />
        </div>
        <div className="hero-content">
          <h1>Discover Handmade Artistry</h1>
          <p>Explore unique artisan products, pottery, and handmade items.</p>
        </div>
      </section>

      {/* Featured Categories */}
       {/* Featured Categories */}
    <section className="featured-categories">
      <h2>Featured Categories</h2>
     <div className="category-grid">
      {[
      { title: "Pottery", imgSrc: "pottery.jpg", link: "/pottery" },
      { title: "Jewelry", imgSrc: "jewelry.jpg", link: "/jewelry-products" },
      { title: "Textiles", imgSrc: "textiles.jpg", link: "/textile-products" },
      { title: "Woodwork", imgSrc: "woodwork.jpg", link: "/woodwork" } // ✅ Added Woodwork path
      ].map((category, index) => (
      <div className="category" key={index}>
        <img src={category.imgSrc} alt={category.title} loading="lazy" />
        <h3>{category.title}</h3>
        <button onClick={() => navigate(category.link)}>
          Explore {category.title}
        </button>
      </div>
       ))}
      </div>
    </section>

      {/* Best-Selling Products Carousel */}
      <section className="best-selling">
        <h2>Best-Selling Products</h2>
        <div className="product-carousel">
          {bestSellingProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.imgSrc} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => console.log(`Added ${product.title} to cart`)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Slider */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-slider">
          <div className="testimonial-item">
            <p>"{testimonials[testimonialIndex].text}"</p>
            <h4>- {testimonials[testimonialIndex].author}</h4>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="new-arrivals-list">
          {newArrivals.map((product) => (
            <div className="new-arrival-item" key={product.id}>
              <img src={product.imgSrc} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => console.log(`Added ${product.title} to cart`)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Our passion lies in bringing you unique, handcrafted items made with love and care. 
          Each artisan pours their heart into every piece, ensuring quality and attention to detail.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="location-map-container">
            {/* Store Location */}
            <div className="location-info">
              <h3>Our Location</h3>
              <p>
                123 Main Street, Anytown, CA 91234 <br />
                Phone: (123) 456-7890 <br />
                Email: info@example.com
              </p>
            </div>
            {/* Map */}
            <div className="map-container">
              <img src="map.png" alt="Store Location" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} Artistry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;