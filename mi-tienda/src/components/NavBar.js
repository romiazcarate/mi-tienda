import React from 'react';
import CartWidget from './CartWidget';
import './navBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Mi Tienda</div>
            <ul className="nav-links">
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar