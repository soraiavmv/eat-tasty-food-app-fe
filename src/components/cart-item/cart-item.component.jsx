import React from 'react';
import Button from '../button/button.component';

const CartItem = ({ item, addToCart, removeFromCart }) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <div className='information'>
                <p>Total: {(item.amount * item.price).toFixed(2)}€</p>
            </div>
            <div className='items-amount'>
                <Button handleClick={() => removeFromCart(item.title)} text='-' />
                <p>{item.amount}</p>
                <Button handleClick={() => addToCart(item)} text='+' />
            </div>
        </div>
    );
}

export default CartItem;