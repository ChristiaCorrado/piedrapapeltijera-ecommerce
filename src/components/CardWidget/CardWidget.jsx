import React from "react";  
import './CardWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const CardWidget = () => {
    return(
        <>
            <div id="carrito" className="carrito">
                    <FontAwesomeIcon icon={faShoppingBag} className="iconsNav"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faUser} className="iconsNav"/>
            </div>
        </>
    )
    
}

export default CardWidget