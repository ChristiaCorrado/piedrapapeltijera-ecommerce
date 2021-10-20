import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './item.css';


const Item = ({ allProducts }) =>{



    return (
        <>
            <div className="card" id="item">
                <div id="tittle" className="tittleCard">{allProducts.tittle}</div>
                <div id="picture" className="pictureCard">{allProducts.picture}</div>
                <div id="description" className="descriptionCard">{allProducts.description}</div>
                <div id="price" className="priceCard">${allProducts.unit_price}</div>
                <ItemCount stock={allProducts.quantity} initial={1}/>
                <button className="cardAddButton">Agregar al carrito</button>
		    </div>
        </>
    )

}

export default Item;