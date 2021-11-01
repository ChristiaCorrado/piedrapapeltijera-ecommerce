import React from 'react'
import './Slider.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import SliderImage from './SliderImage.json'
import { useState } from 'react'


const Slider = ({ slides }) => {

    const [current,setCurrent] = useState(0)
   
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current-1);
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }

    return(
        <>
            <div className="containerPrincipal">
                                
                {SliderImage.map((slide,index) => {
                   return <img src={slide.img} alt="slide" className="image"/>
                })}
                
                <FontAwesomeIcon icon={faChevronLeft} className="iconsNavLeft"  />
             
                <FontAwesomeIcon icon={faChevronRight} className="iconsNavRight" onClick={nextSlide} />
            </div>
       
        </>


    )
}


export default Slider;