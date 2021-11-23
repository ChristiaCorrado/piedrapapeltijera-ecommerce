import './Checkout.css'
import React,  { useContext } from "react"; 
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from '../../firebase';

const Checkout = () => {

    const {cart, totalDeCompra, vaciarCart } = useContext(CartContext)

    const [send, setSend]= useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
      }

    const [dataClient, setDataClient] = useState({
        name: '',
        surname: '',
        phone: 0,
        email: '',
    })

    const setData = (e) => {
      console.log(e.target.value);
      setDataClient({
        ...dataClient,
        [e.target.name]: e.target.value
      }
      )
    }

    const input = [
        {type:"text", name:"name", placeholder:"Nombre"} ,
        {type:"text", name:"surname", placeholder:"Apellido"},
        {type:"number", name:"phone", placeholder:"Numero de telefono"},
        {type:"email" ,name:"email", placeholder:"Email"}
    ]

    const orderClient = {
        cliente: dataClient,
        compra :cart,
        total:totalDeCompra
    }
    console.log(orderClient);
    
    
    const generatedOrder = () => {

        
        
        const db = getFirestore()
        const ordersCollections = collection(db,"orders")
        addDoc(ordersCollections, orderClient).then((id)=>{ console.log(id);})
        vaciarCart()
        setSend(true)
    }


    return (
        <div className="checkout d-flex justify-content-center">
            
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div>
                        <i className="fas fa-shipping-fast"></i>
                        Shipping Details
                    </div>

                    <div className="name">
                        <div>
                            {input.map(key =><input type={key.type} placeholder={key.placeholder} name={key.name} onChange={setData}/>)}
                        </div>
                    </div>
                   
                    <div className="btns">
                            {send? <div/>: <div className="btn" onClick={generatedOrder}>Finalizar Pedido</div>}
                            <Link to="/cart">Ver Carrito</Link>
                            
                    </div>
                </form>
           
        </div>

    )

}


export default Checkout