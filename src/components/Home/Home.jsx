import React from "react";  
import Slider from "../Slider/Slider";
import SliderImage from '../../Products.json'
import Categories from "../Categories/Categories"

const Home = () =>{


    return (
        <>
            <Slider slides={ SliderImage } />
            <Categories/>
        </>
    )
}

export default Home;