import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './ItemCount.css'

const ItemCount = ({ stock, initial, itemAdd}) =>{

    
    const [counter, setCounter] = useState(initial)
    
    const decrementCounter = () =>{
        if (stock !== 0 && counter > initial){
            setCounter(counter - 1)
        }else{
            alert(`no puede agregar 0`)
        }
    }
    
    const incrementCounter = () =>{
        if (stock > counter){
            setCounter(counter + 1)
        }else{
            alert(`no puede agregar mas de ${counter}`)
        }
    }
    
    const {addItemToCart} = useContext(CartContext);

    const onAdd = () => {
        addItemToCart(itemAdd, counter)
    }

    return (

        <>
            <div className="counterContainer">
                <div className="counterBtns">
                    <p>Disponibles = {stock}</p>
                    <div className="counter">
                        <button onClick={decrementCounter}> - </button>
                        <p>{counter}</p>
                        <button onClick={incrementCounter}> + </button>
                    </div>
                </div>
                <button className="cardAddButton" onClick={onAdd}>AGREGAR AL CARRITO</button>
            </div>
        </>
    
    )

}

export default ItemCount