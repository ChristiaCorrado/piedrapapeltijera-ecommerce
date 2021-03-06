import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader.jsx";
import {collection , getDocs } from 'firebase/firestore';
import {getFirestore} from "../../firebase";


const ItemDetailContainer = () => {

    const {productId} = useParams()
    

    const [product, setProduct] = useState(null)


    useEffect(() =>{
        const db = getFirestore()
        getDocs(collection(db,"items")).then
        ((snapshot)=> setProduct(snapshot.docs.map((doc)=> doc.data())))
    }, []);
        

    return(
        <div  className="itemList">
            {product ? product.filter((e) => {return e.id === productId}).map(elem => <ItemDetail item={elem} key={elem.id}/>) : <div className="loaderContainer"><Loader/></div>}
        </div>
    )
}

export default ItemDetailContainer