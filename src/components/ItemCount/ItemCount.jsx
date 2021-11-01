import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial}) =>{

    const [counter, setCounter] = useState(initial)

    const removeItem = () =>{
        if (stock !== 0 && counter > initial){
           setCounter(counter - 1)
        }else{
            alert(`no puede agregar 0`)
        }
    }
    
    const addItem = () =>{
        if (stock > counter){
            setCounter(counter + 1)
        }else{
            alert(`no puede agregar mas de ${counter}`)
        }
    }

    return (

        <>
            <div className="counterContainer">
                <p>Disponibles = {stock}</p>
                <div className="counter">
                    <button onClick={removeItem}> - </button>
                    <p>{counter}</p>
                    <button onClick={addItem}> + </button>
                </div>
            </div>
        </>
    
    )

}

export default ItemCount