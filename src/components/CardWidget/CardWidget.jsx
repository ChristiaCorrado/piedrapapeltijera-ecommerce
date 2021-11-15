import React,  { useContext } from "react"; 
import './CardWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {CartContext} from '../../context/CartContext'
import { Link } from "react-router-dom";

const CardWidget = () => {

    
    const { itemsTotal } = useContext(CartContext)
    

    return(
        <>
            <div id="carrito" className="carrito">
                    <div className="bag">
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingBag} className="iconsNav "></FontAwesomeIcon>
                            <div className="totalArticles">{itemsTotal}</div>
                        </Link>
                    </div>
                    <FontAwesomeIcon icon={faUser} className="iconsNav"/>
            </div>
        </>
    )
    
}

export default CardWidget