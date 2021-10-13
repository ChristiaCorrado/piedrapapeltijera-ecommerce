import React from 'react'
import './NavStyles.css'
import logo from '../assets/logo.png'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = ()=>{

    return(
        <>
        <nav>
            
            <img src={logo} alt="logo" />
            

            <div id="buscar">
            
                <input className="findProduct" type="text" id="buscarProducto" placeHolder='Buscar'/>
            </div>

            <div id="lista">
                <ul className="list">
                    <li className="listArt">Home</li>
                    <li className="listArt">Productos</li>
                    <li className="listArt">Contacto</li>
                </ul>

            </div>

            <CardWidget/>
            
        </nav>
        </>
    )
}

export default NavBar