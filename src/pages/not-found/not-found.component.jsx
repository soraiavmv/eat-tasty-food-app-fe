import React from 'react';
import { NavLink } from 'react-router-dom';
import broccoli from './assets/sad-broccoli.png';
import './not-found.styles.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img className='broccoli' src={broccoli} alt='sad broccoli' />
            <h1>Algo correu mal...</h1>
            <h2>Não encontramos o que procuras.</h2>
            <NavLink className='option' to='/' >
                VOLTAR
            </NavLink>
        </div>
    );
}

export default NotFound;