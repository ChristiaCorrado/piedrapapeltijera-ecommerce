import React,  { useContext } from "react"; 
import './CardWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";

const CardWidget = () => {

    const {cartClicked, clickOnCart} = useContext(CartContext)


    

    return(
        <>
            <div id="carrito" className="carrito">
                    <FontAwesomeIcon icon={faShoppingBag} className="iconsNav" onClick={clickOnCart}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faUser} className="iconsNav"/>
                    <div className={cartClicked ? ' cartContainer hiddenContainer ' : 'cartContainer'}>
                        <div className='closeCart' onClick={clickOnCart}>
                            <div className='fas fa-times'/>
                        </div>
                        <Cart />
                    </div>
            </div>
        </>
    )
    
}

export default CardWidget