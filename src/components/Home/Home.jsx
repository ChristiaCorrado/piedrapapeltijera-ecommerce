import React from "react";  
import Slider from "../Slider/Slider";
import SliderImage from '../../Products.json'

const Home = () =>{


    return (
        <>
            <Slider slides={ SliderImage } />
        </>
    )
}

export default Home;