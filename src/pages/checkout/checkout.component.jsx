import React from 'react';
import CartItem from '../../components/cart-item/cart-item.component';
import './checkout.styles.css';

const Checkout = ({ cartItems, addToCart, removeFromCart }) => {

    const total = () => cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);

    return (
        <div className='checkout'>
            <div className='cart-items'>
                <h2>O teu farnel:</h2>
                {cartItems.length === 0 ?
                    <p>Ainda não há nada por aqui...</p> :
                    cartItems.map(item => (
                        <CartItem
                            key={item.title}
                            item={item}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    ))}
            </div>
            <div className='total'>
                <h2>Total: {total(cartItems).toFixed(2)}€</h2>
            </div>
        </div>
    );
}

export default Checkout;