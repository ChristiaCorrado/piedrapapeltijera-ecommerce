import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = () =>{

    
    return(

        <div className="ItemListContainer">
            <div className="rellenateContainer"></div>

            <ItemCount stock={5} initial={1} />

        
        </div>

    )

}

export default ItemListContainer