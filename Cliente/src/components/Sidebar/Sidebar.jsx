import React from 'react'
import {RiAccountCircleFill} from "react-icons/ri";
import {BsPersonVcardFill} from "react-icons/bs";
import {BiRestaurant} from "react-icons/bi";
import {MdSocialDistance} from "react-icons/md";
import {MdPayments} from "react-icons/md";

function Sidebar() {
  return (
    <div className="aside-container">
      <aside>
      <ul>
        <li><a href="/"> <i><RiAccountCircleFill/></i> Cuenta</a></li>
        <li><a href="/"><i><BsPersonVcardFill/></i>Informacion Personal</a></li>
        <li><a href="/"> <i><BiRestaurant/></i> Restaurante</a></li>
        <li><a href="/"> <i><MdSocialDistance/></i> Redes Sociales</a></li>
        <li><a href="/"> <i><MdPayments/></i> Suscripcion</a></li>
      </ul>
    </aside>
    </div>
    
  )
}

export default Sidebar

