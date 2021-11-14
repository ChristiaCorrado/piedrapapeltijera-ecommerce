import React from 'react'
import { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import {getFirestore} from "../../firebase"
import {collection , getDocs } from 'firebase/firestore'

const ItemListContainer = () =>{
    const { categoryId } = useParams()
    const [allProducts,setAllProducts] = useState()
    

    useEffect(() =>{
        const db = getFirestore()
        getDocs(collection(db,"items")).then
        ((snapshot)=> setAllProducts(snapshot.docs.map((doc)=> doc.data())))
    }, []);
    

    return(
        <>

            <div className="ItemListContainer">
                <div className="rellenateContainer"></div>

                <ItemList allProducts={allProducts} category={categoryId}/>
            
            </div>
        </>
    )

}

export default ItemListContainer