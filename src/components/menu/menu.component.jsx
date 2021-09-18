import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './menu.styles.css';

const Menu = () => {

    const [sections] = useState([
        {
            id: 1,
            description: 'entradas',
            image: 'https://tinyurl.com/4fphxjdc',
        },
        {
            id: 2,
            description: 'carne',
            image: 'https://tinyurl.com/ubze9377',
        },
        {
            id: 3,
            description: 'peixe',
            image: 'https://tinyurl.com/nybsu4tt',
        },
        {
            id: 4,
            description: 'sobremesas',
            image: 'https://tinyurl.com/4ddwsasx',
        },
        {
            id: 5,
            description: 'bebidas',
            image: 'https://tinyurl.com/nbx5chup',
        }
    ]);

    return (
        <div className='menu'>
            {sections.map(({ id, ...props }) => {
                return <MenuItem
                    key={id}
                    {...props}
                />
            })}
        </div>
    )
}

export default Menu;