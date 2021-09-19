import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './menu.styles.css';

const Menu = () => {

    // hard coded sections, considering these will be the only types of products this app will sell
    // may be changed in the future
    const [sections] = useState([
        {
            id: 1,
            description: 'entradas',
            image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwZXRpemVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        },
        {
            id: 2,
            description: 'carne',
            image: 'https://www.kai-stiepel.com/wp-content/uploads/2016/11/dry-aged-beef-t-bone-22.jpg',
        },
        {
            id: 3,
            description: 'peixe',
            image: 'https://www.odonnellphotograf.com/wp-content/uploads/2018/10/462_Fish_Plate_034.jpg',
        },
        {
            id: 4,
            description: 'sobremesas',
            image: 'https://libbyvision.com/wp-content/uploads/2017/05/Resort_Photography_Palm_Beach_Luxury_South_florida_Breakers.jpg',
        },
        {
            id: 5,
            description: 'bebidas',
            image: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/10/1-13.jpg?w=750',
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