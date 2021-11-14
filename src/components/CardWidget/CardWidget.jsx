import './CardWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

const CardWidget = () => {



    

    return(
        <>
            <div id="carrito" className="carrito">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingBag} className="iconsNav"></FontAwesomeIcon>
                    </Link>
                    <FontAwesomeIcon icon={faUser} className="iconsNav"/>
            </div>
        </>
    )
    
}

export default CardWidget