import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='nav'>
        <div>
            <img src={logo} alt="" />   
        </div>
        <div className='navItems'>
            <a href=".">Order</a>
            <a href=".">Order Review</a>
            <a href=".">Manage Inventory</a>
        </div>
            
        </nav>
    );
};

export default Header;