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

    const arrPrice = cosmetics.map(value => value.price);
    const wholePrice = arrPrice.reduce((present, current) => present + current, 0);




    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
            <h3>Shop my cosmetics!</h3>

            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id}
                    cosmetic={cosmetic} ></Cosmetic>)
            }
            <div style={{ border: '2px solid red', marginBottom: '50px' }}>
                <hr />
                <Totalprice price={wholePrice} />
            </div>

        </div>
    );
};

export default Cosmetics;