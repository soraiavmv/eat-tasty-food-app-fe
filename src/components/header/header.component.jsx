import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as Cart } from './assets/cart.svg'

import './header.styles.css';

const Header = () => (
    <header className='header'>
        <NavLink className='logo-container' to='/'>
            <Logo className='logo' />
        </NavLink>
        <div className='options'>
            <NavLink className='option' to='/cart'>
                <Cart className='cart' />
            </NavLink>
            <NavLink className='option' to='/login'>
                LOGIN
            </NavLink>
        </div>
    </header >
)

export default Header;