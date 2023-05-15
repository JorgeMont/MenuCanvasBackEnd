import React, { useState } from "react";
import FormMenu from "./FormMenu/FormMenu";
import FormPlatillo from "./FormPlatillo/FormPlatillo";




function MenuEditor() {

  const [menu, setMenu] = useState('')
  const [categorias, setCategorias] = useState([]);

  const [platillo, setPlatillo] = useState('');

  const [image,setImage] = useState(null);
  // const [fileName, setFileName] = useState('Ningun archivo Seleccionado');

  const [alerta, setAlerta] = useState({});


  return (

    <>
      <div className="createMenu__container">
        <div className="menu__bannerContainer">
          <img src="https://picsum.photos/200" alt="banner create menu" />
        </div>
        <h1>Crear Menu</h1>
        <FormMenu
          categorias={categorias}
          setCategorias={setCategorias}
          menu={menu}
          setMenu={setMenu}
          alerta={alerta}
          setAlerta={setAlerta}
        />
        
        <h2 className="mt-5">Crear Platillo</h2>
        <div className="createDish__container">
        <FormPlatillo
          categorias={categorias}
          platillo={platillo}
          setPlatillo={setPlatillo}
          image={image}
          setImage={setImage}
          alerta={alerta}
          setAlerta={setAlerta}
        />
      </div>
      </div>


    </>
  );
}

export default MenuEditor;
