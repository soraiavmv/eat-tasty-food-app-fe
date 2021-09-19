import React from 'react';
import Button from '../button/button.component';
import './cart-item.styles.css';

const CartItem = ({ item, addToCart, removeFromCart }) => {
    return (
        <div className='cart-item'>
            <div className='information'>
                <h3>{item.title}</h3>
                {/* calculate total price for item quantity */}
                <p>Total: {(item.amount * item.price).toFixed(2)}€</p>
            </div>
            <div className='quantity'>
                <Button handleClick={() => removeFromCart(item.title)} text='-' />
                <p>{item.amount}</p>
                <Button handleClick={() => addToCart(item)} text='+' />
            </div>
        </div>
    );
}

export default CartItem;