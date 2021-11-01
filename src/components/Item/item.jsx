import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ allProducts }) =>{

    return (
        <>
            <div className="card" id={allProducts.id}>
                <div id="picture"><img alt="cmmo" src={allProducts.picture_url} className="pictureCard"/></div>
                <div>
                    <div id="description" className="descriptionCard">{allProducts.description}</div>
                    <div id="price" className="priceCard">${allProducts.unit_price}</div>
                </div>
                <button className="cardAddButton">AGREGAR AL CARRITO</button>
                <ItemCount stock={allProducts.quantity} initial={1}/>
                <Link to={allProducts.id}><button>Ver MAS</button></Link>
		    </div>
        </>
    )

}

export default Item;