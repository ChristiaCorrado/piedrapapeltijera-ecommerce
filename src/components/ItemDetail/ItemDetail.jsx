import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'



const ItemDetail = ( {item} ) => {


   
    return(
        <>
            <div className="itemDetail">
                
                <div className="boxItemDetail">

                    <div className="boxImg">
                        <div id="picture"><img alt="cmmo" src={item.picture_url} className="pictureDetail"/></div>
                    </div>

                    <div className="boxDescription">
                        <div className="descriptionDetail">{item.description}</div>
                        <div className="priceCardDetail">${item.unit_price}</div>
                        <div className="buttonBox">
                            <div className="counterDetail">
                                <ItemCount stock={item.quantity} initial={1} />
                            </div>
                            <button className="cardAddButton">AGREGAR AL CARRITO</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ItemDetail