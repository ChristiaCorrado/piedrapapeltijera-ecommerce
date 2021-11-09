import React,  { useContext } from "react"; 
import './Cart.css'
import { CartContext } from "../../context/CartContext";
import addToCart from './addToCart.svg'

const Cart = ( ) =>{

    const {cart, removeItem} = useContext(CartContext)

    return(
        <>
            <div ClassName="cartContainer">
                {cart.length === 0 ? (<div className=""><img alt="add to cart" src={addToCart}/></div>) : cart.map((items) => {
                    return <div className="cardCart">   
                            <div className="alrt">{items.id}</div>;
                            <div>{items.title}</div>
                            <div onClick={removeItem}>X</div>
                           </div>
                }
                )
                }

            </div>

        </> 
    )

}


export default Cart