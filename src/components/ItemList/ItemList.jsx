import React from "react";
import Item from "../Item/Item";
import { useState } from "react";
import { useEffect } from "react"
import './ItemList.css'
import Products from '../../Products.json'
import Loader from "../Loader/Loader.jsx";


const ItemList = () =>{

    const [allProducts,setAllProducts] = useState()

    const getProducts = (data) => new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (data) {
                resolve(data)
            }else{
                reject(console.log('error'))
            }
        },2000)
    });

    useEffect(() =>{
        getProducts(Products)
        .then((res)=>setAllProducts(res))
        .catch((err)=> console.log(err))
    }, [])



    return(
        <>
            <div className="itemList">
               {allProducts ? allProducts.map(productPaint => <Item allProducts={productPaint} />) : <Loader/>}
            </div>
        </>
    )
}

export default ItemList