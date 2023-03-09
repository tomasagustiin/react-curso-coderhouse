import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
return (
    <div className="navbar">
        <div className="header">
            <div className="logo">
                <a href="/">
                <img src="" alt="logo"/>
                </a>
            </div>
                <ul className="menu">
                    <li ><Link to="/">Inicio</Link></li>
                    <li ><Link to="">Tienda</Link></li>
                    <li ><Link to="/detalle">Detalle</Link></li>
                </ul>
        </div>
        <div className="Carrito">
            <CartWidget />    
        </div>
    </div>
)
}
