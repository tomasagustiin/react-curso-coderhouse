import React from 'react'
import { Link } from 'react-router-dom'

function ItemList({users, greeting}) {
return (
    <div className="articulos">
        <h1>{greeting}</h1>
        <ul className='productos'>
            {users.map((user) => (
                <li className='productos-card' key={user.id}> 
                    <img src={user.foto} alt={user.producto}/>
                    <h3>{user.producto}</h3>
                    <small>{user.descripcion}</small>
                    <Link to={`/detalle/${user.id}`}>Ver Descripcion</Link>
                </li>
            ))}
        </ul>
    </div>
)
}

export default ItemList