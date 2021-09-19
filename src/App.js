import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import FoodMenu from './pages/food-menu/food-menu.component.jsx';
import Login from './pages/login-register/login.component.jsx';
import Checkout from './pages/checkout/checkout.component.jsx';

import './App.css';
import NotFound from './pages/not-found/not-found.component.jsx';

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  // Will run once component mounts on the DOM to 
  // check if there is data saved in local storage (on refresh, cart data won't be lost)
  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem('cart'));

    if (localCart) {
      setCartItems(localCart); // use data in local storage as cart items
    }
  }, []);

  // Will run every time an item is added to the cart
  // Updates local storage
  const addToCart = async (clickedItem) => {

    // because react state updates are asynchronous a copy of
    // the cart items container is needed for local storage update
    const prev = [...cartItems];
    const isItemInCart = prev.find(item => item.title === clickedItem.title);

    // if item is already in cart, update quantity
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

    // if item isn't yet in cart, add it
    const newCart = [...prev, { ...clickedItem, amount: 1 }];
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Will run every time an item is removed from the cart
  // Updates local storage
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
    // App routes
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/login' component={Login} />
        <Route exact={true} path='/cart'>
          <Checkout cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} onPayment={() => setCartItems([])} />
        </Route>
        <Route exact={true} path='/entradas'>
          <FoodMenu category='entrada' addToCart={addToCart} />
        </Route>
        <Route exact={true} path='/carne'>
          <FoodMenu category='carne' addToCart={addToCart} />
        </Route>
        <Route exact={true} path='/peixe'>
          <FoodMenu category='peixe' addToCart={addToCart} />
        </Route>
        <Route exact={true} path='/sobremesas'>
          <FoodMenu category='sobremesa' addToCart={addToCart} />
        </Route>
        <Route exact={true} path='/bebidas'>
          <FoodMenu category='bebida' addToCart={addToCart} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;