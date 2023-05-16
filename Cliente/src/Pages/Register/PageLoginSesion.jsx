import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ModalLoginSesion from "../../components/ModalLoginSesion/ModalLoginSesion";
import Footer from "../../components/Footer/Footer"

function PageLoginSesion ( ){

    return (
     <>
     <nav>
          <Navbar/>  
        </nav>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center' id="modalPageExample">
        
        <ModalLoginSesion/>

      </div>
      <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
          <Footer/>
      </footer>
     
     </>   
    )
 
}

export default PageLoginSesion;