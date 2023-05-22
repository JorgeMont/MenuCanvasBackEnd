import React from 'react';
import Platillo from '../../components/Platillo/Platillo';
import Categoria from '../../components/Categoria/Categoria';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';



function Dashboard() {
  return <>
    <nav>
      <Navbar/>  
    </nav>
    <div className="container-fluid d-flex 3fr 9fr p-3">
      <Sidebar className="bg-light"/>
      <div className='categoriaPlatillos__container'>
      <div className='categorias__container'>
        <a href="#"><Categoria/> </a>
        <a href="#"><Categoria/></a>
        <a href="#"><Categoria/></a>
        <a href="#"><Categoria/></a>
        <a href="#"><Categoria/></a>

      </div>
      <div className='platillos__container'>
        <a href="#"><Platillo/></a> 
        <a href="#"><Platillo/></a> 
        <a href="#"><Platillo/></a> 
        <a href="#"><Platillo/></a> 
      </div>
    </div>
    </div>

     
    <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
      <Footer/>
    </footer>
  </>
}

export default Dashboard;
