import React, { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import './App.css';

const App = () => {
  const INITIAL_MONEY = 100_000_000_000;

  const [money, setMoney] = useState(INITIAL_MONEY);
  const [cart, setCart] = useState({});

  const handleBuy = (product) => {
    if (money >= product.price) {
      setCart((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 0) + 1,
      }));
      setMoney((prev) => prev - product.price);
    }
  };

  const handleSell = (product) => {
    if (cart[product.id] > 0) {
      setCart((prev) => ({
        ...prev,
        [product.id]: prev[product.id] - 1,
      }));
      setMoney((prev) => prev + product.price);
    }
  };

  return (
    <>
      <Header  />

      <div className="money-display">
        ${money.toLocaleString()}
      </div>

      <div className="app-wrapper">
        <ProductList
          products={products}
          onBuy={handleBuy}
          onSell={handleSell}
          cart={cart}
          money={money}
        />

        <Cart cart={cart} products={products} />
      </div>
    </>
  );
};

export default App;
