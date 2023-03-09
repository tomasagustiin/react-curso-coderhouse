import react from 'react'
import './ItemListContainer.scss';
import { useState, useEffect } from 'react';
import products from '../products/products.js' 

import React from 'react'
import ItemList from './ItemList';

function getItemsFromDataBase (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
};

export const ItemListContainer = ({greeting}) => {
    
const [users, setUsers] = useState ([])

useEffect( () =>{
    let promisedata = getItemsFromDataBase();
    console.log(promisedata)
    promisedata.then( (respuesta) =>{
        setUsers(respuesta)
    } )

},
[])

return (
    <>
    <h1>{greeting}</h1>
    <ItemList users={users}/>
    </>
)}