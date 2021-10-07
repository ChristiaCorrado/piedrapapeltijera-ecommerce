import React from 'react'
import './NavStyles.css'
import logo from './logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const NavBar = ()=>{

    return(
        <>
        <nav>
            
                <img src={logo} alt="logo" />
            

            <div id="buscar">
                <input className="findProduct" type="text" id="buscarProducto" placeHolder="Buscar"/>
            </div>

            <div id="lista">
                <ul className="list">
                    <li className="listArt">Home</li>
                    <li className="listArt">Productos</li>
                    <li className="listArt">Contacto</li>
                </ul>

            </div>

            <div id="carrito" className="carrito">  
                <FontAwesomeIcon icon={faShoppingBag} className="listArt"/>
                <FontAwesomeIcon icon={faUser} className="listArt"/>
            </div>
        </nav>
        </>
    )
}

export default NavBar