import React, { useState } from 'react'
import './NavStyles.css'
import logo from '../assets/logo.png'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'

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
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            
            <div id="lista" className={clicked ? ' listContainer hiddenMenu' : 'listContainer'} >
                <ul className="list">
                    <Link to={"/"}>
                        <li className="listArt">Home</li>
                     </Link>   

                    <Link to={"/products"}>
                        <li className="listArt">Productos</li>
                    </Link> 
                    
                    <Link to={"/"}>
                        <li className="listArt">Categorias</li>
                    </ Link>
                           
                    


                </ul>
            </div>

            <div id="buscar" className="buttonsMenu">
                                               
                <CardWidget/>
            </div>

            
        </nav>
        </>
    )
}

export default NavBar