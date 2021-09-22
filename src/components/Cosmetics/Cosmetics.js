import React, { useEffect, useState } from 'react';
import { add as addition, multiply } from '../../utilities/storage';
import Cosmetic from '../Cosmetic/Cosmetic';
import Totalprice from '../Totalprice/Totalprice';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    // one way
    // const arrPrice = cosmetics.map(value => value.price);
    // const wholePrice = arrPrice.reduce((present, current) => present + current, 0);

    // another way
    const wholePrice = cosmetics.reduce((present, current) => present + current.price, 0);

    console.log(wholePrice);

    return (
        <div >
            <h3>Shop my cosmetics!</h3>

            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id}
                    cosmetic={cosmetic}
                    totalPrice={wholePrice}
                ></Cosmetic>)
            }






            <div style={{ border: '2px solid red', marginBottom: '50px' }}>
                <hr />
                <Totalprice price={wholePrice} />

            </div>


        </div>
    );
};

export default Cosmetics;