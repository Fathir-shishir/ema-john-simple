import React from 'react';

const Cart = (props) => {
    return (
        <div>
           <h1>Order summery</h1>
            <p>selected product : {props.cart.length}</p> 
        </div>
    );
};

export default Cart;