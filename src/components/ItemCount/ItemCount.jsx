import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial }) =>{

    const [counter, setCounter] = useState(initial)

    const onAdd = () =>{
        if (stock>= initial) {
            const additem = () =>{
                setCounter(counter + 1)
            }
            additem()
        }
    }
    

   const onDecre = () =>{
       if (stock = !0) {
           const removeitem = () =>{
               setCounter(counter - 1)
           }
           removeitem()
       }
       
   }

    return (

        <div className="counter">
            <button onClick={onDecre}> - </button>
            <p>{counter}</p>
            <button onClick={onAdd}> + </button>
        </div>
    
    )

}

export default ItemCount