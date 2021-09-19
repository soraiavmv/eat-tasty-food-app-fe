import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.svg'
import cart from './assets/cart.svg'

import './header.styles.css';

const Header = () => {

    return (
        <header className='header'>
            <NavLink className='logo-container' to='/'>
                <img className='logo' src={logo} alt='app logo' />
            </NavLink>
            <div className='options'>
                <NavLink className='option' to='/cart' >
                    <img className='cart' src={cart} alt='cart icon' />
                </NavLink>
                <NavLink className='option' to='/login' >
                    LOGIN
                </NavLink>
            </div>
        </header >
    );
}

export default Header;