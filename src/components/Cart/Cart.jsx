import React,  { useContext } from "react"; 
import './Cart.css'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ( ) =>{

    const {cart, removeItem, totalDeCompra, vaciarCart } = useContext(CartContext)

   
    
    return(
        <>  
            
                <div className="titleCart">Este es tu carrito!</div>
                    {cart.length === 0 ? (<div className="cartVacio">
                                            <div className="imgCartVacio"></div>
                                            <div>
                                                <div className="titleCartVacio">Al parecer tu carrito se encuentra vacio!
                                                <Link to={"/products"}><button className="btn btnCartAdd">Ver Productos</button></Link>
                                                </div>
                                            </div>
                                        </div>) : cart.map((items) => {

                        return <div key={items.id} className="productInCart">                                      
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

                    { cart.length !== 0  ? <div className="pt-5 productInCart">
                                                <div className="totalDeCompra d-flex justify-content-end">
                                                    TOTAL DE SU COMPRA $ {totalDeCompra}.
                                                </div>
                                                <div className="d-flex">
                                                    <button className="btn btn-danger me-4" onClick={ vaciarCart } >Vaciar Carrito</button>
                                                    <Link to={"/checkout"} className="btn btn-success ms-4">Finalizar Compra</Link> 
                                                </div>
                                            </div> : <div/> }
           

        </> 
    )

}


export default Cart