import React, { useState } from 'react';
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import Modal from '../../components/modal/modal.component';

import './checkout.styles.css';

const Checkout = ({ cartItems, addToCart, removeFromCart, onPayment }) => {

    // if payment button is clicked, a modal should be rendered
    const [buttonClicked, setButtonClicked] = useState(false);

    // calculates the total price of the items in the cart
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
                {buttonClicked ?
                    <Modal onPayment={() => onPayment()} onClose={() => setButtonClicked(false)} /> :
                    <div>
                        <h2>Total: {total(cartItems).toFixed(2)}€</h2>
                        {cartItems.length === 0 ? // buy button should only be shown if there are items in the cart
                            <div /> :
                            <Button text='COMPRAR' handleClick={() => setButtonClicked(true)} />
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default Checkout;