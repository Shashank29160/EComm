import React from "react";
import { Link } from "react-router-dom";
import "./TextilesProductsPage.css";  

const textileProducts = [
  {
    id: 1,
    name: "Handwoven Silk Saree",
    price: "$200",
    image: "https://cdn.vibecity.in/providers/62924f91a147b70011418f7f/1000004216_0798f623-c7b4-4471-b8d3-7fd14a4d1d68-3X.png",
    description: "Elegant handwoven silk saree with traditional motifs.",
    path: "/silk" // ✅ Silk Saree Page Path
  },
  {
    id: 2,
    name: "Cotton Embroidered Kurti",
    price: "$60",
    image: "https://www.libas.in/cdn/shop/files/8_f7e2dd15-710b-4f15-8d21-c8ebcaf3430b.jpg?v=1738939913",
    description: "Beautiful cotton kurti with intricate embroidery.",
    path: "/kurti" // ✅ Kurti Page Path
  },
  {
    id: 3,
    name: "Handmade Wool Shawl",
    price: "$90",
    image: "https://kepra.in/cdn/shop/files/IMG_3257.jpg?v=1733900069&width=1080",
    description: "Warm and stylish wool shawl with fine handwork.",
    path: "/shawl" // ✅ Shawl Page Path
  },
  {
    id: 4,
    name: "Block Printed Cotton Dupatta",
    price: "$45",
    image: "https://shilphaat.com/wp-content/uploads/2020/10/Indigo-dabu-block-printed-silk-cotton-dupatta-shilphaat.jpg",
    description: "Lightweight cotton dupatta with beautiful block printing.",
    path: "/cotton" // ✅ Cotton Dupatta Page Path Added
  }
];
const TextileProductsPage = () => {
  return (
    <div className="textile-products-container">
      <h1>Textile Products</h1>
      <div className="textile-products-grid">
        {textileProducts.map((product) => (
          <div className="textile-product-card" key={product.id}>
            <img src={product.image} alt={product.name} loading="lazy" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="textile-price">{product.price}</p>
            {product.path ? (
              <Link to={product.path}>
                <button className="textile-buy-button">View Product</button>
              </Link>
            ) : (
              <button className="textile-buy-button">Buy Now</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default TextileProductsPage;
