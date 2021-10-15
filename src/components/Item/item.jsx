import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './item.css';


const Item = () =>{

    return (
        <>
            <div className="card" id="item">
                <div id="tittle" className="tittleCard">Titulo</div>
                <div id="picture" className="pictureCard"></div>
                <div id="description" className="descriptionCard">Lorem ipsum dolor sit amet </div>
                <div id="price" className="priceCard">16000</div>
                <ItemCount stock={5} initial={1}/>
                <button className="cardAddButton">Agregar al carrito</button>
		    </div>
        </>
    )

}

export default Item;