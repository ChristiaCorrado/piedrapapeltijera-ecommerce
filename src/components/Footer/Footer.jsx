import React from "react"

const whatsapp = <a href="https://api.whatsapp.com/send?phone=+543584834134" target="_blank" className="fab fa-whatsapp redes px-1" rel=""/>
const instagram = <a href="https://instagram.com/piedrapapelytijera.ok?utm_medium=copy_link" target="_blank" className="fab fa-instagram redes px-1" rel=""/>
const facebook = <a target="_blank" rel="noreferrer" href="https://www.facebook.com/piedrapapelytijeraok/" className="fab fa-facebook redes px-1"/>

const Footer = () => {

    return (
        <footer className="footer d-flex flex-column justify-content-center align-items-center w-100">
            <div  className="botoneraFooter d-flex pt-5">            
                {facebook}
                {whatsapp}
                {instagram}         
            </div>

            <div>Creado con ❤️ por <a href="https://github.com/ChristiaCorrado" target="_blank">Christian Corrado</a></div>

	    </footer>
    )
}

export default Footer