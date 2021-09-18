import React from 'react';
import { NavLink } from 'react-router-dom';

import './login.styles.css';

const Login = () => {
    return (
        <div className='soon'>
            <h1>Disponível brevemente.</h1>
            <NavLink className='option' to='/' >
                VOLTAR
            </NavLink>

        </div>
    );
}

export default Login;