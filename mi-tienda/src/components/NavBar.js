import React from 'react';
import CartWidget from './CartWidget';
import './navBar.css';
import { Link } from 'react-router-dom';

const categories = ['Color unico', 'Colores varios', 'Pintura total'];


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Mi Tienda</div>
            <ul className="nav-links">
                {categories.map((category) => (
                    <li key={category}>
                        <Link to={`/category/${category.toLowerCase()}`}>
                            {category}
                        </Link>
                    </li>
                ))}
                <li><Link to="#contacto">Contacto</Link></li>
                <li><Link to="#sobre-nosotros">Sobre Nosotros</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar