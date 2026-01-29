import React from "react";
import "./Cart.css";

const Cart = ({ isOpen, closeCart }) => {
  return (
    <div className={`cart-container ${isOpen ? "open" : ""}`} onMouseLeave={closeCart}>
      <h2>Your Cart</h2>
      <p>Cart items will be displayed here.</p>
    </div>
  );
};

export default Cart;
