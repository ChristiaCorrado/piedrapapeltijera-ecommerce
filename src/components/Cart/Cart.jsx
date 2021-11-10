import React,  { useContext } from "react"; 
import './Cart.css'
import { CartContext } from "../../context/CartContext";

const Cart = ( ) =>{

    const {cart, removeItem} = useContext(CartContext)

    return(
        <>
            
                {cart.length === 0 ? (<div className="cartVacio"><div className="cartVacioImg"></div>Tu carrito se encuentra vacio!</div>) : cart.map((items) => {
                    return <div className="cardCart">  
                                <img src={items.picture_url} alt={items.id} />
                                <div className="cardBody">
                                    <div className="cardTitle">{items.title}</div>
                                    <div>cantidad: {items.quantity}</div>
                                    <div>Precio ${items.unit_price}</div>
                                    <div></div>
                                </div>
                                <div onClick={removeItem} class="far fa-trash-alt removeItem"></div>
                           </div>
                }
                )
                }

           

        </> 
    )

}


export default Cart