import React from "react";  
import Slider from "../Slider/Slider";
import Categories from "../Categories/Categories"
import SliderImage from '../Slider/SliderImage.json'

const Home = () =>{


    return (
        <>
            <Slider slides={ SliderImage } />
            <Categories/>
        </>
    )
}

export default Home;