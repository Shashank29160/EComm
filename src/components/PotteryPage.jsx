import React from "react";
import { useNavigate } from "react-router-dom";
import "./PotteryPage.css"; 

const potteryItems = [
  {
    id: 1,
    name: "Handcrafted Clay Pot",
    description: "A beautiful handcrafted clay pot.",
    price: "$25",
    image: "https://img.freepik.com/premium-photo/adorned-clay-pots-with-traditional-art_431161-38968.jpg",
  },
  {
    id: 2,
    name: "Traditional Ceramic Bowl",
    description: "A stunning ceramic bowl by artisans.",
    price: "$30",
    image: "https://cdn.vibecity.in/providers/63086c90121c8f0011ef45b5/KM-005-0771_41049baa-7f10-4209-ad74-65758a13eed9-3X.png",
  },
  {
    id: 4,
    name: "Rustic Terracotta Jug",
    description: "A classic terracotta jug for a rustic look.",
    price: "$35",
    image: "https://i.etsystatic.com/36919488/c/2250/2250/0/507/il/3636c5/5300824853/il_600x600.5300824853_50d8.jpg",
  },
  {
    id: 5,
    name: "Modern Ceramic Planter",
    description: "A stylish ceramic planter for indoor plants.",
    price: "$45",
    image: "https://plantlane.com/cdn/shop/files/DSC09884_533x.jpg?v=1711714891",
  },
];

const PotteryPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = (id) => {
    console.log("Navigating to product:", id); 

    if (id === 1) {
      navigate(`/product/${id}`);
    } else if (id === 2) {
      navigate(`/tcb/${id}`); 
    } else if (id === 4) {
      navigate(`/rustic-terracotta-jug`); 
    } else if (id === 5) {
      navigate(`/modern-ceramic-planter`); 
    } else {
      navigate(`/product/${id}`); 
    }
  };

  return (
    <div className="pottery-container">
      {potteryItems.map((item) => (
        <div key={item.id} className="pottery-card">
          <div className="image-container">
            <img src={item.image} alt={item.name} className="pottery-image" />
          </div>
          <div className="card-content">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
            <button className="buy-button" onClick={() => handleBuyNow(item.id)}>
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PotteryPage;
