import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../LoginBtn/LoginBtn";
import canvasLogo from "../../Assets/Images/menucanvas_logo.png";
import userIcon from '../../Assets/Images/user_icon.png';
// import {AiOutlineSetting} from "react-icons/ai";
// import {BiExit} from "react-icons/bi"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src={canvasLogo} alt="logo" />
          MenuCanvas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"}> Home</Link>
            </li>
            <li className="nav-item">
            <Link to={"/Nosotros"}> Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to={"/planes"}> Planes</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Contacto"}> Contacto</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <img src={userIcon} alt="profile-pic" />
            {/* <div className="btn-group dropdown">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Log In
                </button>
                <ul className="dropdown-menu">
                    <li><a href="/">Ajustes de la cuenta <i><AiOutlineSetting/></i></a></li>
                    <li><a href="/">Cerrar session <i><BiExit/></i> </a></li>
                </ul>
            </div> */}
            <LoginButton />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
