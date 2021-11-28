import React from "react"
import {Link} from "react-router-dom"

const Footer = () => {

    return (
        <footer className="footer d-flex flex-column justify-content-center align-items-center w-100">
            <div  className="botoneraFooter d-flex pt-5">            
                <a target = "_blank"  rel = "noopener noreferrer"  href = "https://api.whatsapp.com/send?phone=+543584834134" className="fab fa-whatsapp redes px-1 redes"> </a> 
                <a target = "_blank"  rel = "noopener noreferrer"  href = "https://instagram.com/piedrapapelytijera.ok?utm_medium=copy_link"  className="fab fa-instagram redes px-1 redes"> </a>
                <a target = "_blank"  rel = "noopener noreferrer"  href = "https://www.facebook.com/piedrapapelytijeraok/" className="fab fa-facebook redes px-1 redes"> </a>
            </div>

            <div>Creado con ❤️ por < Link  target = "_blank"  rel = "noopener noreferrer"  to="https://github.com/ChristiaCorrado" > Christian Corrado</Link></div>

	    </footer>
    )
}

export default Footer