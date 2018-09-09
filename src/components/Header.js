import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Badge from './Badge';
import Logout from './Logout';

const Header = () => (
    <header className="header">
        <div className="logo">
            <Link to="/"><img src="../images/logo.png" /></Link>
        </div>

        <div className="menu">
            <ul>
                <li><NavLink to="/home" activeClassName="is-active">Home</NavLink></li>
                <li><NavLink to="/shop" activeClassName="is-active">Shop</NavLink></li>
                <li><NavLink to="/cart" activeClassName="is-active">Cart</NavLink><Badge /></li>
                <li><NavLink to="/admin" activeClassName="is-active">Admin</NavLink></li>
                <Logout />
            </ul>
        </div>       
    </header>
);

export default Header;