import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../Assets/Images/user_icon.png";
import mcLogo from "../../Assets/Images/menucanvas_logo.png";
import { AiOutlineSetting } from "react-icons/ai";
import { BiExit } from "react-icons/bi";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={mcLogo} alt="logo" />
          MenuCanvas
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={"/"}> Home</Link>
            </li>
            <li class="nav-item">
              <Link to={"/nosotros"}> Nosotros</Link>
            </li>
            <li class="nav-item">
              <Link to={"/planes"}> Planes</Link>
            </li>
            <li class="nav-item">
              <Link to={"/contacto"}> Contacto</Link>
            </li>
          </ul>
          <span class="navbar-text">
            <a href="/profile">
              <img src={UserIcon} alt="profile-pic" />
              <div class="btn-group dropdown">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Log In
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="/">
                      Ajustes de la cuenta{" "}
                      <i>
                        <AiOutlineSetting />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      Cerrar session{" "}
                      <i>
                        <BiExit />
                      </i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
