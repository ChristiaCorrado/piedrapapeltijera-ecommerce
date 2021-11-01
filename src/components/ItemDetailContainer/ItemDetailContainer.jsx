import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from '../../Products.json';
import { useState, useEffect } from "react";



const ItemDetailContainer = () => {

    const {productId} = useParams()

    console.log(productId);


    const [allProducts, setAllProduct] = useState(null)
    console.log(allProducts);

    const getProduct = (data) => new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (data) {
                resolve(data)
            }else{
                reject(console.log('error'))
            }
        },2000)
    });


    useEffect(() =>{
        getProduct(Products)
        .then((res)=>setAllProduct(res))
        .catch((err)=> console.log(err))
    }, [])

    

    return(
        <>
        {allProducts ? allProducts.filter((e) => {return e.id === productId}).map(elem => <ItemDetail item={elem}/>) : "Loading..."}
        </>
    )
}

export default ItemDetailContainer