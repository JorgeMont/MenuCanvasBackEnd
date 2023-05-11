import React from 'react';
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {MdEmail} from "react-icons/md";

function Footer() {
  return (
    <footer className="container-fluid d-flex 3fr 3fr 3fr 3fr">
    <div className="container-fluid row" id="footer-container">
      <div className="redes col-3">
        <h6>MenuCanvas</h6>
        <div className="icons">
          <a href="/"><i><BsFacebook/></i></a>
          <a href="/"><i><AiFillTwitterCircle/></i></a>
          <a href="/"><i><MdEmail/></i></a>  
        </div>
        </div>
      <div className="nosotros col-3" id="nosotros">
        <h6>Nosotros</h6>
        <ul>
          <li><a href="/" class="footer-list">Origen</a></li>
          <li><a href="/" class="footer-list">El Equipo</a></li>
          <li><a href="/" class="footer-list">Terminos y Condiciones</a></li>
        </ul>
      </div>
      <div className="servicios col-3">
        <h6>Servicios</h6>
        <ul>
          <li><a href="/" class="footer-list">Menu</a></li>
          <li><a href="/" class="footer-list">Nuestro Producto</a></li>
        </ul>
      </div>
      <div className="otros col-3">
        <h6>Otros</h6>
        <ul>
          <li><a href="/" class="footer-list">Contacto</a></li>
          <li><a href="/" class="footer-list">Ayuda</a></li>
        </ul>
      </div>
    </div>
    </footer>
  )
}

export default Footer
