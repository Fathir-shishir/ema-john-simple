import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Item.css'
const Item = (props) => {
    const{AdtoCardHandelar,product}=props
    const{name,price,img,seller,ratings}= product
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='itemInfo'>
                <p className='itemName'>{name}</p>
                <p>Price :${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Ratings:{ratings}</p>
            </div>
            <div className=''>
            <button onClick={()=>{AdtoCardHandelar(product)}} className='cardButton'> <p>Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            
            </div>
            
            
        </div>
    );
};

export default Item;