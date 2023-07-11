import React, { useState } from 'react';
import Platillo from '../../components/Platillo/Platillo';
import Categoria from '../../components/Categoria/Categoria';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';



function Dashboard( {getData }) {
  //const tarjetaPlatillo = [];

  const [datosPlatillos, setDatosPlatillos] = useState ([]);

  const handleCategoria = async (event) => {
    event.preventDefault();
    
    
    
    try{
      const getId = await axios.get('http://localhost:3030/api/menu/646019bd56e549c826808efd');
      const getData = await axios.get('http://localhost:3030/api/platillo');
      //console.log (getData)

      const datos = await getData.data
      setDatosPlatillos (datos);


      console.log (datosPlatillos);


    }catch (error){
      console.error(error);
    }



    

    
  }

  



  return <>
    <nav>
      <Navbar/>  
    </nav>
    <div className="container-fluid d-flex 3fr 9fr p-3">
      <Sidebar className="bg-light"/>
      <div className='categoriaPlatillos__container'>
      <div className='categorias__container' >
        
        <a href="#"><Categoria label="Desayunos"/> </a>
        
        <Categoria onClick= {handleCategoria} label="Comidas"/>
        
        <button onClick= {handleCategoria} >
        <Categoria 
          label="Comidas 2" 
          
        /> </button>

        <a href="#"><Categoria label="Cenas"/></a>
        <a href="#"><Categoria label="Bebidas"/></a>
        <a href="#"><Categoria label="Postres"/></a>

      </div>
      <div className='platillos__container'>
         {/* 
        <a href="#"><Platillo/></a> 
        <a href="#"><Platillo/></a> 
        <a href="#"><Platillo/></a> 
        <a href="#"><Platillo/></a> 

       
         datosPlatillos.forEach(element => {
            <Platillo 
              key={Element.index.nombre}
            
            />
          
          });

          */}  
          
         {/*    <p key={index}> {item.nombre} </p>    */} 
        
        {datosPlatillos.map ( (item, index) => {
          
          return(    

                <Platillo key={index} 
                  title={item.nombre} 
                  description={item.descripcion} 
                  price={item.precio}
                  image={item.foto}
                /> 
            
        
                )
          
          
          })

        } 
        
        
         
          
        

        



      </div>
    </div>
    </div>

     
    <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
      <Footer/>
    </footer>
  </>
}

export default Dashboard;
