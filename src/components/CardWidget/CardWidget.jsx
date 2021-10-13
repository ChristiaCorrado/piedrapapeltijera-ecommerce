import React from "react";  
import ItemCount from '../ItemCount/ItemCount'
import './CardWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const CardWidget = () => {
    return(
        <>
            <div id="carrito" className="carrito">
                
                    <div className="bag">

                        <FontAwesomeIcon icon={faShoppingBag} className="listArt"></FontAwesomeIcon>
                    </div>
                    

                    <FontAwesomeIcon icon={faUser} className="listArt"/>
                
            </div>
        </>
    )
    
}

export default CardWidget