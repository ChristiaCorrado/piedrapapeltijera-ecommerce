import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'



const ItemDetail = ( {item} ) => {
     
    return(
        <>
            <div className="itemDetail">
                
                <div className="boxItemDetail">

                    <div className="boxImg">
                        <img alt="cmmo" src={item.picture_url} className="pictureDetail"/>
                    </div>

                    <div className="boxDescription">
                        <div className="descriptionDetail">{item.description}</div>
                        <div className="priceCardDetail">${item.unit_price}</div>
                        <div className="buttonBox">
                            <div className="counterDetail">
                                <ItemCount stock={item.quantity} initial={1} itemAdd={item} />
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ItemDetail
