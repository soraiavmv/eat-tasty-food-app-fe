import React, { useState } from 'react';
import Button from '../button/button.component';
import Form from '../form/form.component';
import Message from '../message/message.component';

import './modal.styles.css';

const Modal = ({ onClose }) => {

    const [paymentSucceeded, setPaymentSucceeded] = useState(false);
    const [formOk, setFormOk] = useState(false);

    const submitPayment = () => {
        localStorage.clear();
        setPaymentSucceeded(true);
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
                        <Form confirmPayment={() => setFormOk(true)} />
                    }
                </div>
                <div className='modal-footer'>
                    <div className={paymentSucceeded ? '' : 'cancel'}>
                        <Button text={paymentSucceeded ? 'Voltar' : 'Cancelar'} handleClick={onClose} />
                    </div>

                    {formOk && !paymentSucceeded ?
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