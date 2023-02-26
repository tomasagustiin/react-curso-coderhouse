import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import './Cartwidget.scss'

export const CartWidget = () => {
return (
    <a href="#" className="cart-widget">
        <BsFillCartFill className="icono" />
        <span className="contador">0</span>
    </a>
)
}
