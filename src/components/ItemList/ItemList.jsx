import './ItemList.css'
import Loader from "../Loader/Loader.jsx";
import Item from "../Item/Item";


const ItemList = ( { allProducts, category } ) =>{
    const products = allProducts
    const categoria = category
    
    const clasifiedProds = products ? (categoria ? products.filter((items) => { return items.category_id === categoria }) : products) : products;
    

    return(
        <>  
            <div className="itemList">
               {clasifiedProds ? clasifiedProds.map((productPaint) =>{ return <Item data={productPaint} key={productPaint.id} /> }) : <Loader/>}
            </div>
        </>
    )
}

export default ItemList