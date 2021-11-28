import React from 'react';
import { Link } from 'react-router-dom';
import "./Alert404.css";

const Alert404 = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="image404 container"> <img src="./notFound-404.svg" alt="" /></div>
      <h3 className="title">Pagina no encontrada</h3>
      <Link to="/"><div className="btn">VOLVER</div></Link>
    </div>
  );
};

export default Alert404;