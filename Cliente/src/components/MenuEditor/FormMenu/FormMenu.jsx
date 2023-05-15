import React, { useState } from "react";
import axios from 'axios';
import Alerta from "../../Alerta/Alerta";
import { FaPlus } from "react-icons/fa";


const FormMenu = ({categorias, setCategorias, menu, setMenu, alerta,setAlerta}) => {

    const [nombreMenu, setNombreMenu] = useState('');
    const [categoria, setCategoria] = useState('');
    // const [listaCategorias, setListaCategorias] =useState([]);


    const handleCategoria = (event) => {
        event.preventDefault();
          console.log('Creando Categoria...');
          if(categoria === ''){
            setAlerta({msg: 'Debes añadir una categoría', error: true})
          }else{
    
            setCategorias([...categorias, categoria]);
            setAlerta(false);
          }
      }
    
    
      const handleSubmitMenu = async (event) => {
        event.preventDefault();
        if([nombreMenu,categoria].includes('')){
          setAlerta({msg: 'Existen campos vacíos, debes ingresar el nombre del menu y las categorias.', error: true});
          return;
        }

        try {
          const getId = await axios.get('http://localhost:3030/api/restaurante/645fecb432eb99628c2579ee');
          const {data} = await axios.post('http://localhost:3030/api/menu', {nombre : nombreMenu, categorias, restauranteId: getId.data._id} )

          setAlerta({msg: data.msg, error: false});

        } catch (error) {
          console.log(error);
        }
    

      }

      const { msg } = alerta;

    return(

        <form className="form__createMenu mt-4" onSubmit={handleSubmitMenu}>
          <label htmlFor="menu">Nombre: </label>
          <input 
          id="menu"
          className="form-control w-75" 
          type="text" 
          placeholder="Nombre menu"
          value={nombreMenu}
          onChange={e => setNombreMenu(e.target.value)}
          />

          <h3 className="mt-4">Categorias</h3>
          <p className="msg__instructions mb-4">Primero añade las categorías de tu menú y posteriormente selecciona el botón "Crear Menú". </p>
          <div className="form__createMenu-categorias">
            <input 
            id="categoria"
            className="form-control w-50" 
            type="text" 
            placeholder="Ingresa categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            />
            <button className="btn__categoria" onClick={handleCategoria}> <FaPlus/> Añadir Categoría</button>

            <div className="createMenu__categoriaList">
              {categorias.map((categoria, index) => {
                return (
                  <p key={index}>{categoria}</p>
                )
              })}
            </div>
          </div>

           
          <button type="submit" className="btn mt-4 mb-3">Crear Menú</button>
          {msg && <Alerta alerta={alerta}/>}
        </form>
    )
}


export default FormMenu;