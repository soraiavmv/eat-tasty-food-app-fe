import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.css';

const MenuItem = ({ description, image, history, match }) => (
    <div className='menu-item' onClick={() => history.push(`${match.url}${description}`)}>
        <div style={{ backgroundImage: `url(${image})` }} className='background-image'></div>
        <div className='description'>
            <h1 className='title'>{description.toUpperCase()}</h1>
        </div>
    </div >
);

export default withRouter(MenuItem);