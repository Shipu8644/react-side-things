import React from 'react';


const Cosmetic = (props) => {

    const { name, price, gender } = props.cosmetic;


    return (
        <div>
            <h2>name: {name}</h2>
            <p> Price: ${price}</p>
            <p><small>gender: {gender}</small></p>

        </div>
    );
};

export default Cosmetic;