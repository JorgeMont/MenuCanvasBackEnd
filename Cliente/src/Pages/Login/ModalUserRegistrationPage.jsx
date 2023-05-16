import React from 'react';
import ModalUserRegistration from '../../components/ModalUserRegistration/ModalUserRegistration';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function ModalUserRegistrationPage() {
  return ( 
    <> 
      <nav>
          <Navbar/>  
        </nav>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center' id="modalPageExample">
        {/* <h3>This is only a test page, Modal Button should be added on the previous page</h3> */}
        <ModalUserRegistration/>
      </div>
      <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
          <Footer/>
      </footer>
    </>
  )
}

export default ModalUserRegistrationPage;
