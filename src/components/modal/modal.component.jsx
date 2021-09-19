import React, { useState } from 'react';
import Button from '../button/button.component';
import Form from '../form/form.component';
import Message from '../message/message.component';

import './modal.styles.css';

const Modal = ({ onClose, onPayment }) => {

    // if payment has been made, a message will be rendered
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);

    // confirm button will only appear once form fields have no errors
    const [formOk, setFormOk] = useState(false);

    const submitPayment = () => {
        localStorage.clear(); // clear local storage; when app is refreshed, no items will be in cart
        setPaymentSucceeded(true);
        onPayment(); // change checkout page state
    }

    return (
        <div className='modal'>
            <div className='content'>
                <div className='modal-header'>
                    {paymentSucceeded ?
                        null :
                        <h3 className='modal-title'>Insere os teus dados de pagamento:</h3>
                    }
                </div>
                <div className='modal-body'>
                    {paymentSucceeded ?
                        <Message /> :
                        <Form confirmForm={() => setFormOk(true)} />
                    }
                </div>
                <div className='modal-footer'>
                    {/* change button styling, according to state */}
                    <div className={paymentSucceeded ? '' : 'cancel'}>
                        <Button text={paymentSucceeded ? 'Voltar' : 'Cancelar'} handleClick={onClose} />
                    </div>

                    {formOk && !paymentSucceeded ? // once payment is submitted, submit button disappears
                        <div className='confirm'>
                            <Button text='Confirmar' handleClick={submitPayment} />
                        </div> :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal;