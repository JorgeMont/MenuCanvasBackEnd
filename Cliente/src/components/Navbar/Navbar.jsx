import React from 'react'
import {AiOutlineSetting} from "react-icons/ai";
import {BiExit} from "react-icons/bi"

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand" href="/">
    <img src="https://picsum.photos/200"  alt="logo" />
    MenuCanvas
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/nosotros">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/planes">Planes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contacto">Contacto</a>
        </li>
      </ul>
      <span class="navbar-text">
        <a href="/profile">
            <img src="https://picsum.photos/200" alt="profile-pic" />
            <div class="btn-group dropdown">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Nombre
                </button>
                <ul class="dropdown-menu">
                    <li><a href="/">Ajustes de la cuenta <i><AiOutlineSetting/></i></a></li>
                    <li><a href="/">Cerrar session <i><BiExit/></i> </a></li>
                </ul>
            </div>
        </a>
      </span>
    </div>
  </div>
</nav>

  );
};

export default Navbar
