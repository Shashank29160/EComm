import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Stories from "./components/Stories";
import PotteryPage from "./components/PotteryPage";
import JewelryProductsPage from "./components/JewelryProductsPage";
import TextileProductsPage from "./components/TextileProductsPage";
import ProductPage from "./components/ProductPage";
import TCB from "./components/TCB";
import RusticTerracottaJug from "./components/RusticTerracottaJug";
import ModernCeramicPlanter from "./components/ModernCeramicPlanter";
import Silk from "./components/silk";
import Kurti from "./components/kurti";
import Shawl from "./components/Shawl";
import Cotton from "./components/Cotton";
import Gold from "./components/gold";
import Oxidized from "./components/Oxidized";
import Ring from "./components/Ring";
import Pearl from "./components/Pearl";
import Woodwork from "./components/Woodwork";
import Chair from "./components/Chair";
import Table from "./components/Table";
import Shelf from "./components/Shelf";
import Clock from "./components/Clock";
import Auth from "./components/Auth";
import Cart from "./components/Cart";
import "./App.css";

const Navbar = ({ cartItemCount, toggleCart }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Artistry</Link>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/stories">Stories</Link></li>
      </ul>
      <div className="navbar-actions">
        <div className="cart-icon" onMouseEnter={toggleCart}>
          <ShoppingCart size={24} />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </div>
        <button className="btn btn-primary" onClick={() => navigate("/auth")}>
          Join Us
        </button>
      </div>
    </nav>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleCart={toggleCart} cartItemCount={cartItems.length} />
        <Cart isOpen={isCartOpen} closeCart={closeCart} cartItems={cartItems} removeFromCart={removeFromCart} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/pottery" element={<PotteryPage addToCart={addToCart} />} />
          <Route path="/jewelry-products" element={<JewelryProductsPage addToCart={addToCart} />} />
          <Route path="/textile-products" element={<TextileProductsPage addToCart={addToCart} />} />
          <Route path="/product/:productId" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/tcb/:productId" element={<TCB addToCart={addToCart} />} />
          <Route path="/rustic-terracotta-jug/:productId?" element={<RusticTerracottaJug addToCart={addToCart} />} />
          <Route path="/modern-ceramic-planter/:productId?" element={<ModernCeramicPlanter addToCart={addToCart} />} />
          <Route path="/woodwork" element={<Woodwork addToCart={addToCart} />} />
          <Route path="/woodwork/chair" element={<Chair addToCart={addToCart} />} />
          <Route path="/woodwork/table" element={<Table addToCart={addToCart} />} />
          <Route path="/woodwork/shelf" element={<Shelf addToCart={addToCart} />} />
          <Route path="/clock" element={<Clock addToCart={addToCart} />} />
          <Route path="/silk" element={<Silk addToCart={addToCart} />} />
          <Route path="/kurti" element={<Kurti addToCart={addToCart} />} />
          <Route path="/shawl" element={<Shawl addToCart={addToCart} />} />
          <Route path="/cotton" element={<Cotton addToCart={addToCart} />} />
          <Route path="/gold" element={<Gold addToCart={addToCart} />} />
          <Route path="/oxidized" element={<Oxidized addToCart={addToCart} />} />
          <Route path="/ring" element={<Ring addToCart={addToCart} />} />
          <Route path="/pearl" element={<Pearl addToCart={addToCart} />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
