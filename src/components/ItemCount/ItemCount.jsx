import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './ItemCount.css'

const ItemCount = ({ stock, initial, itemAdd}) =>{

    
    const [counter, setCounter] = useState(initial)

    const [add,setAdd]=useState(false)

    const [alert , setAlert] = useState(false)
    
    const decrementCounter = () =>{
        if (stock !== 0 && counter > initial){
            setCounter(counter - 1)
        }else{
            
        }
    }
    
    const incrementCounter = () =>{
        if (stock > counter){
            setCounter(counter + 1)
        }else{
           setAlert(true)
        }
    }

    const closeAlert= () => {
        setAlert(false)
    }
    
    const {addItemToCart} = useContext(CartContext);

    const onAdd = () => {
        addItemToCart(itemAdd, counter)
        setAdd(true)
    }

    return (

        <>
            <div className="counterContainer">
                {add ? (<>
                    <div className="">Producto Agregado al carrito</div>
                    <div className="">
                        <Link to="/products"><button className="btn">Ver Mas Productos</button></Link>                        
                        <Link to="/cart"><button className="btn">Ver Carrito</button></Link>
                    </div>
                </>):(

                <>
                    <div className="counterBtns">
                        <p>Disponibles = {stock}</p>
                        <div className="counter">
                            <button className="fas fa-caret-down " onClick={decrementCounter}></button>
                            <p>{counter}</p>
                            <button className="fas fa-caret-up" onClick={incrementCounter}></button>
                        </div>
                    </div>
                    <button className="btn" onClick={onAdd}>AGREGAR AL CARRITO</button>
                </>)
                }

                <div className={alert ? "modalNoGuia modalVisibles d-flex justify-content-center align-items-center" : "modalNoGuia d-flex justify-content-center align-items-center" }>
                            
                            <div className="containerMjeGGuia d-flex flex-column justify-content-center align-items-center"> 
                                    <div className="mb-5">No podra agregar mas de {stock} unidades</div>    
                                    <div className='btn w-50 mt-5'onClick={closeAlert}>CLOSE</div>
                            </div>
                            
                        </div>
                </div>
        </>
    
    )

}

export default ItemCount