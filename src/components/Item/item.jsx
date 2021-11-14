import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';



const Item = ({ data }) =>{



    return (
        <>
            <div className="card" id={data.id}>
                <div id="picture"><img alt="cmmo" src={data.picture_url} className="pictureCard"/></div>
                <div className="boxMiniDetail">
                    <div id="description" className="descriptionCard">{data.title}</div>
                    <div id="price" className="priceCard">${data.unit_price}</div>                
                <div className="">
                    <Link to={`/item/${data.id}`}><button className="cardSeeMore"><i class="fas fa-eye boxVerMas"/> VER</button></Link>
                </div>
                </div>
		    </div>
        </>
    )

}

export default Item;