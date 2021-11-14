import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'



const Categories = () =>{


    

    return (
        <>  
            <div>CATEGORIAS</div>
            <div className="cardsCategory">
                <Link to={"products/Boligrafos"}>
                    <div className="cardCategory">
                        <h2 className="cardCategory-title">Boligrafos</h2>
                        <img src="https://mundofw.com/wp-content/uploads/2021/05/11499_1-768x768.jpg" alt=""/>
                    </div>
                </ Link>

                <Link to={'products/Marcadores'}>
                    <div className="cardCategory">
                        <h2 className="cardCategory-title">Marcadores</h2>
                        <img src="https://i.imgur.com/SIfj2fU.jpg?2" alt=""/>

                    </div>
                </Link>
                <Link to={'products/Accesorios'}>
                    <div className="cardCategory">
                        <h2 className="cardCategory-title">Accesorios</h2>
                        <img src="https://www.moovingargentina.com.ar/images/banners/home/Banner_MAW_Pastel.jpg" alt=""/>
                        
                    </div>
                </Link>
                <Link to={'products/Agendas'}>
                    <div className="cardCategory">
                        <h2 className="cardCategory-title">Agendas</h2>
                        <img src="https://mundofw.com/wp-content/uploads/sb-instagram-feed-images/254462610_2167062260101751_6061584290731911926_nlow.jpg" alt=""/>
                    </div>
                </Link>
                <Link to={'products/Resaltadores'}>
                    <div className="cardCategory">
                        <h2 className="cardCategory-title">Resaltadores</h2>
                        <img src="https://i.imgur.com/yavAJVM.jpg" alt=""/>
                    </div>
                </Link>
            </div>
        </>
    )

    
}




export default Categories