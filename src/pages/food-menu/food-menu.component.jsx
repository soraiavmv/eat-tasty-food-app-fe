import React, { useEffect, useState } from 'react';
import FoodOption from '../../components/food-option/food-option.component';
import { NavLink } from 'react-router-dom';

import config from '../../config/config-dev.json';
import '../../components/menu/menu.styles.css';
import './food-menu.styles.css';

const FoodMenu = ({ category, addToCart }) => {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        fetch(`${config['api-url']}/${category}/items`)
            .then((response) => response.json())
            .then((result) => { setSections(result) });
    }, [category]);

    return (
        <div className='menu'>
            {typeof sections === 'object' ?
                sections.map(({ id, ...props }) => {
                    return <FoodOption key={id} {...props} addToCart={addToCart} />
                }) :
                <div className='soon'>
                    <h1>Disponível brevemente.</h1>
                    <NavLink className='option' to='/' >
                        VOLTAR
                    </NavLink>
                </div>
            }
        </div>
    );
}

export default FoodMenu;