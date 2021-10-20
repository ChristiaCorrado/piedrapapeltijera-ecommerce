import React, { useState } from 'react'
import './NavStyles.css'
import logo from '../assets/logo.png'
import CardWidget from '../CardWidget/CardWidget'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBars} from '@fortawesome/free-solid-svg-icons'

const NavBar = ()=>{

    const [clicked,setClicked] = useState(false)
    

    const handleClick = () => {
        if (clicked === false) {
            setClicked(true)
        }else{
            setClicked(false)
        }
        
    }

    return(
        <>
        <nav>
            <button className="listArt barsMenu" onClick={handleClick} ><i className={clicked ? 'fas fa-times' : "fas fa-bars"}></i></button>
            <div className="imgContainer">
                <img src={logo} alt="logo" />
            </div>
            
            <div id="lista" className="listContainer">
                <ul className="list">
                    <li className="listArt">Home</li>
                    <li className="listArt">Productos</li>
                    <li className="listArt">Contacto</li>
                </ul>
            </div>

            <div id="buscar" className="buttonsMenu">
                <input className="findProduct listArt" type="text" id="buscarProducto" placeHolder="Buscar"/>
                <CardWidget/>
                
            </div>

            
        </nav>
        </>
    )
}

export default NavBar