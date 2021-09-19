import React, { useState } from 'react';
import Cards from 'react-credit-cards';

import './form.styles.css';
import 'react-credit-cards/es/styles-compiled.css';


const Form = () => {

    const [cvc, setCvc] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [focus, setFocus] = useState('');

    const handleInputFocus = (e) => {
        setFocus(e.target.name);
    }

    const handleInputChange = (e) => {
        e.target.name === 'name' ? setName(e.target.value) :
            e.target.name === 'cvc' ? setCvc(e.target.value) :
                e.target.name === 'number' ? setCardNumber(e.target.value) :
                    setExpirationDate(e.target.value);
    }


    return (
        <div className='payment'>
            <Cards
                cvc={cvc}
                expiry={expirationDate}
                focused={focus}
                name={name}
                number={cardNumber}
            />
            <form className='payment-form'>
                <input
                    type='text'
                    name='number'
                    placeholder='Card Number'
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />

                <div className='smaller-input'>
                    <input
                        type='text'
                        name='expiry'
                        placeholder='Valid Thru'
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type='text'
                        name='cvc'
                        placeholder='CVC'
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
            </form>
        </div>
    );
}

export default Form;