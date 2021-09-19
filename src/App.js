import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";
import FoodMenu from "./pages/food-menu/food-menu.component.jsx";
import Login from "./pages/login-register/login.component.jsx";
import Checkout from "./pages/checkout/checkout.component.jsx";

import './App.css';

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let localCart = localStorage.getItem('cart');
    localCart = JSON.parse(localCart);

    if (localCart) {
      setCartItems(localCart)
    }

  }, []);

  const addToCart = async (clickedItem) => {
    const prev = [...cartItems];
    const isItemInCart = prev.find(item => item.title === clickedItem.title);

    if (isItemInCart) {
      const newCart = prev.map(item =>
        item.title === clickedItem.title
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCartItems(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return;
    }

    const newCart = [...prev, { ...clickedItem, amount: 1 }];
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (title) => {
    const prev = [...cartItems];

    const newCart = prev.reduce((acc, item) => {
      if (item.title === title) {
        if (item.amount === 1) {
          return acc;
        };
        return [...acc, { ...item, amount: item.amount - 1 }];
      }
      return [...acc, item];
    }, [])

    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/cart">
            <Checkout cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} onPayment={() => setCartItems([])} />
          </Route>
          <Route exact={true} path="/entradas">
            <FoodMenu category='entrada' addToCart={addToCart} />
          </Route>
          <Route exact={true} path="/carne">
            <FoodMenu category='carne' addToCart={addToCart} />
          </Route>
          <Route exact={true} path="/peixe">
            <FoodMenu category='peixe' addToCart={addToCart} />
          </Route>
          <Route exact={true} path="/sobremesas">
            <FoodMenu category='sobremesa' addToCart={addToCart} />
          </Route>
          <Route exact={true} path="/bebidas">
            <FoodMenu category='bebida' addToCart={addToCart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;