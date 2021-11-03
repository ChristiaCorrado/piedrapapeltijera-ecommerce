import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ allProducts }) =>{



    return (
        <>
            <div className="card" id={allProducts.id}>
                <div id="picture"><img alt="cmmo" src={allProducts.picture_url} className="pictureCard"/></div>
                <div className="boxMiniDetail">
                    <div id="description" className="descriptionCard">{allProducts.description}</div>
                    <div id="price" className="priceCard">${allProducts.unit_price}</div>
                <button className="cardAddButton">AGREGAR AL CARRITO</button>
                <div className="boxVerMas">
                    <ItemCount stock={allProducts.quantity} initial={1}/>
                    <Link to={allProducts.id}><button className="cardSeeMore"><i class="fas fa-eye"></i> VER</button></Link>
                </div>
                </div>
		    </div>
        </>
    )

}

export default Item;