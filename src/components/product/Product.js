import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Item from '../item/Item';
import './Product.css'

const Product = () => {
    const[products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const AdtoCardHandelar =(product)=>{
        const newCart =[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='product'>
            <div className="productComtainer">
             {
                 products.map(product=><Item 
                  key={product.id}
                  product={product}
                  AdtoCardHandelar ={AdtoCardHandelar}

                  ></Item>)
             }
            </div>
            <div className="oderSummery">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Product;