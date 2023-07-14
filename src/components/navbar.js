import React from 'react';
import "../index.css";
import logoImage from '../resources/logo2.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#F4ECE0' }}>
            <div className="container-fluid">
                <ul className="navbarListado">
                    <li >
                        <a href="/Home">
                            <img
                                src={logoImage}
                                alt='Logo'
                                height='80'
                            />
                        </a>
                    </li>
                    <li className="navbarItems">
                        <a href="/AboutMe" className="navbar-home">
                            Sobre mí
                        </a>
                    </li>
                    <li className="navbarItems">
                        <a href="/Proyectos" className="navbar-home">
                            Proyectos
                        </a>
                    </li>
                    <li className="navbarItems">
                        <a href="/Contacto" className="navbar-home">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;