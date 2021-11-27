import React from 'react'
import './Slider.css'

const Slider = () => {

    return(
        <>
            <div className="containerPrincipal">
                                
                <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item  active">
                            <img src="https://i.imgur.com/PnXyy2g.png" className="" alt="..."/>
                        </div>
 
                        <div className="carousel-item ">
                            <img src="https://i.imgur.com/emMpmbt.png" className="" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
       
        </>


    )
}


export default Slider;