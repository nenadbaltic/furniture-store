import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Badge from './Badge';

const Header = () => (
    <header className="header">
        <div className="logo">
            <Link to="/"><img src="images/logo.png" /></Link>
        </div>

        <div className="menu">
            <ul>
                <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                <li><NavLink to="/shop" activeClassName="is-active">Shop</NavLink></li>
                <li><NavLink to="/cart" activeClassName="is-active">Cart</NavLink><Badge /></li>
                <li><NavLink to="/admin" activeClassName="is-active">Admin</NavLink></li>
            </ul>
        </div>       
    </header>
);

export default Header;