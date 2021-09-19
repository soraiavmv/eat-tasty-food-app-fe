import React from 'react';
import gluten from './assets/gluten.svg';
import ovo from './assets/ovo.svg';
import lactose from './assets/lactose.svg';
import frutosSecos from './assets/frutos-secos.svg';

import './food-option.styles.css';
import Button from '../button/button.component';

const alergenIcons = {
    gluten,
    ovo,
    lactose,
    frutosSecos
};

const FoodOption = ({ title, price, description, picture, alergens, addToCart }) => {
    return (
        <div className='food-option'>
            <div className='details'>
                <h4 className='title'>{title}</h4>
                <div>
                    <p className='desc'>{description}</p>
                    <div className='alergens'>
                        {alergens ? alergens.map(alergen => { // map alergens to alergen icons
                            return <img key={alergen}
                                src={alergen === 'frutos secos' ?
                                    alergenIcons['frutosSecos'] :
                                    alergenIcons[alergen]} alt={alergen} />
                        }) :
                            [] // if alergens absent, return empty array
                        }
                    </div>
                </div>
                <div>
                    <p className='price'>{`${price}€`}</p>
                    <Button handleClick={() => addToCart({ title, price })} text='+ Adicionar' />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${picture})` }} className='photo' >
            </div>
        </div>
    );
}

export default FoodOption;