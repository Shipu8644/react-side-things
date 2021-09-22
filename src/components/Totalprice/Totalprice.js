import React from 'react';

const Totalprice = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Total price: {props.price}</h2>
        </div>
    );
};

export default Totalprice;