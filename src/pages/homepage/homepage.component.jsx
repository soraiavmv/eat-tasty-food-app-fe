import React from 'react';
import Menu from '../../components/menu/menu.component.jsx';

import './homepage.styles.css';

const HomePage = () => (
    <div className='homepage'>
        <Menu />
        <div>
            <h1 className='question'>Pssst... Já almoçaste?</h1>
        </div>
    </div>
);

export default HomePage;