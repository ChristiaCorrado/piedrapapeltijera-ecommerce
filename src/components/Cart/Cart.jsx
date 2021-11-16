import React,  { useContext } from "react"; 
import './Cart.css'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const Cart = ( ) =>{

    const {cart, removeItem, totalDeCompra } = useContext(CartContext)
 

    return(
        <>  
            <div>
                <div className="titleCart">Este es tu carrito!</div>
                    {cart.length === 0 ? (<div className="cartVacio">
                                            <div className="imgCartVacio"></div>
                                            <div>
                                                <div className="titleCartVacio">Tu carrito se encuentra vacio!
                                                <Link to={"/products"}><button className="btn btnCartAdd">Ver Productos</button></Link>
                                                </div>
                                            </div>
                                        </div>) : cart.map((items) => {

                        return <div className="productInCart">                                      
                                        <div className="cardCart">  
                                            <img src={items.picture_url} alt={items.id} />
                                            <div className="cardProductBody">
                                                <div className="productTitle">{items.title}</div>
                                                <div>cantidad: {items.quantity}</div>
                                                <div>Precio Unitario ${items.unit_price}</div>
                                                <div>Total = ${items.unit_price*items.quantity}</div>
                                            </div>
                                            <div id={items.id} onClick={removeItem} className="far fa-trash-alt removeItem"></div>
                                        </div>                           
                            </div>
                    }
                    )
                    }

                    {totalDeCompra !== 0 ? <div>TOTAL DE SU COMPRA $ {totalDeCompra}</div> : <div Style={'display:hidden'}> (hidden)TOTAL DE SU COMPRA $ {totalDeCompra}</div>}
           </div>

        </> 
    )

}


export default Cart