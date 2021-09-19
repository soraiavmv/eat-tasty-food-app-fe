import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import { validateCardNumber, validateCVC, validateExpirationDate } from './util/input-verifications';

import './form.styles.css';
import 'react-credit-cards/es/styles-compiled.css';


const Form = ({ confirmForm }) => {

    // form fields
    const [cvc, setCvc] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    // input on focus
    const [focus, setFocus] = useState('');

    // error verification and handling
    const [hasErrors, setHasErrors] = useState('false');
    const [errorMessage, setErrorMessage] = useState('');

    // depending on the focused input field, card visual element will change
    const handleInputFocus = (e) => {
        setFocus(e.target.name);
    }

    const handleInputChange = (e) => {
        e.target.name === 'name' ? setName(e.target.value) :
            e.target.name === 'cvc' ? setCvc(e.target.value) :
                e.target.name === 'number' ? setCardNumber(e.target.value) :
                    setExpirationDate(e.target.value);
    }

    // input validation (there is no name validation as in real life apps often there isn't)
    // error message setting
    const validateInput = () => {
        if (!validateCardNumber(cardNumber)) {
            setHasErrors(true);
            setErrorMessage('Invalid Card Number.');
            return;
        }

        if (!validateExpirationDate(expirationDate)) {
            setHasErrors(true);
            setErrorMessage('Invalid Date. Format: MM/YY.');
            return;
        }

        if (!validateCVC(cvc)) {
            setHasErrors(true);
            setErrorMessage('Invalid CVC.');
            return;
        }

        setHasErrors(false);
        confirmForm();
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
            <form
                className='payment-form'
                onBlur={validateInput}
            >
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
                {hasErrors ? // error message will be shown when errors are present; one error message will be shown at a time
                    <div>
                        <h4 className='error'>{errorMessage}</h4>
                    </div> :
                    null
                }
            </form>

        </div>
    );
}

export default Form;