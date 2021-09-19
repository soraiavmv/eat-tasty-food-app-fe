import React from 'react';

import './message.styles.css';

const Message = () => {
    return (
        <div className='message'>
            <h2 className='message-title'>Obrigada por confiares em nós.</h2>
            <h3 className='message-body'>A tua comida estará pronta para em cerca de 40 minutos.
                Poderás levantá-la no ponto EatTastyFood mais próximo de ti.</h3>
            <h2 className='message-footer'>Bom almoço!</h2>
        </div>);
}

export default Message;