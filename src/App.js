import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";
import FoodMenu from "./pages/food-menu/food-menu.component.jsx";
import Login from "./pages/login-register/login.component.jsx";

import './App.css';
import Checkout from "./pages/checkout/checkout.component.jsx";

const App = () => {

  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([])

  let localCart = localStorage.getItem("cart");

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart)

  }, [])

  const addToCart = (clickedItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.title === clickedItem.title);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return acc
          };
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/cart">
            <Checkout cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
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