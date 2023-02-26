import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.scss'

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
                    <li className='items'><a href="" className='items__pags'>Inicio</a></li>
                    <li className='items'><a href="" className='items__pags'>Tienda</a></li>
                    <li className='items'><a href="" className='items__pags'>Contacto</a></li>
                </ul>
        </div>
        <div className="Carrito">
            <CartWidget />    
        </div>
    </div>
)
}
