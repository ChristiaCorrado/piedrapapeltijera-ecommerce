import React from 'react';
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
                <div className="">
                    <Link to={`item/${allProducts.id}`}><button className="cardSeeMore"><i class="fas fa-eye boxVerMas"/> VER</button></Link>
                </div>
                </div>
		    </div>
        </>
    )

}

export default Item;