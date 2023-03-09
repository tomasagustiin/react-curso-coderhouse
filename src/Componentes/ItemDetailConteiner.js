import react from 'react'
import './ItemDetailConteiner.scss'
import { useState, useEffect } from 'react';
import products from '../products/products.js' 

import React from 'react'
import { useParams } from 'react-router-dom';


export const ItemDetailConteiner = ({greeting}) => {

    function getItemsFromDataBase (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let encontrado = products.find( item => item.id === Number(idItem))
                resolve(encontrado)
            }, 1000);
        })
    };
    
const [user, setUser] = useState ([])

const params = useParams()
const idItem = params.idItem


useEffect( () =>{
    let promisedata = getItemsFromDataBase();
    console.log(promisedata)
    promisedata.then( (respuesta) =>{
        setUser(respuesta)
    } )

},
[])

return (
    <div className="articulos">
        <h1>{greeting}</h1>
        <ul className='productos'>
                <li className='productos-card' key={user.id}> 
                    <img src={user.foto} alt={user.producto}/>
                    <h3>{user.producto}</h3>
                    <small>{user.descripcion}</small>
                    <button>Agregar al Carrito</button>
                </li>
        </ul>
    </div>
)
}