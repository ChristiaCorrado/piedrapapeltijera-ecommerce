import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial,  onAdd }) =>{

    const [counter, setCounter] = useState(0)

    const additem = () =>{
        setCounter(counter + 1)
    }

    const removeitem = () =>{
        setCounter(counter - 1)
    }

    return (

        <div className="counter">
            <p>{counter}</p>
            <div>
                <button onClick={additem}> + </button>
                <button onClick={removeitem}> - </button>

            </div>
        </div>
    
    )

}

export default ItemCount