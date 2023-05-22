import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Alerta from '../../Alerta/Alerta';
import ImageUpload from './UploadImage';

const FormPlatillo = ({categorias, platillo, setPlatillo, image, setImage}) => {

    const [nombrePlatillo, setNombrePlatillo] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoriaPlatillo, setCategoriaPlatillo] = useState( [] );
    const [descripcionPlatillo, setDescripcionPlatillo] = useState('');
    const [alerta, setAlerta] = useState({});


    
  const handleSubmitDish = async (event) => {
    event.preventDefault();
    console.log('Enviando Formulario')

    if([nombrePlatillo,precio,categoriaPlatillo,descripcionPlatillo,image].includes('')){
      setAlerta({msg: 'Existen campos vacíos, debes llenar todos los campos.', error: true});
        return;
      }

    try {
      const getId = await axios.get('http://localhost:3030/api/menu/646019bd56e549c826808efd');
      const {data} = await axios.post('http://localhost:3030/api/platillo', {nombre : nombrePlatillo, precio, categoria: categoriaPlatillo, descripcion: descripcionPlatillo, foto: image, menuId: getId.data._id} )

      console.log({data});

    } catch (error) {
      console.log(error);
    }

    setAlerta({msg: 'Platillo creado correctamente.', error: false});

    setNombrePlatillo('');
    setPrecio('');
    setCategoriaPlatillo('');
    setDescripcionPlatillo('');
    setImage(null)
  }

  const { msg } = alerta;

    return(
        <form className="form__createDish mb-5" onSubmit={handleSubmitDish}>
          <div className="createDish__group">
            <label htmlFor="nombre">Nombre</label>
            <input className="form-control w-25" 
            id="nombre" 
            type="text" 
            placeholder="Nombre de platillo"
            value={nombrePlatillo}
            onChange={e => setNombrePlatillo(e.target.value)}
            />
          </div>
          <div className="createDish__group">
            <label htmlFor="precio">Precio</label>
            <input className="form-control w-25" 
            id="precio" 
            type="text" 
            placeholder="Ingrese Precio"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
            />
          </div>
          <div className="createDish__group">
            <label htmlFor="categoria">Categoría</label>

              <Form.Select className="w-75" id="categoria"
              value={categoriaPlatillo}
              onChange={e => setCategoriaPlatillo(e.target.value)}
              >
              {categorias.map((categoria, index) => {
                return (
                  <option value={index}>{categoria}</option>
                )
              })}
              </Form.Select>
          </div>

          <div className="createDish__group">
            <label htmlFor="descrpcion">Descripción</label>
            <textarea className="form-control w-25" 
            name="descrpcion" 
            id="descrpcion" 
            type="text" 
            placeholder="Ingrese Descripción"
            value={descripcionPlatillo}
            onChange={e => setDescripcionPlatillo(e.target.value)}
            />
            
          </div>

          <div className="createDish__group">
            <div className="createDish__group--uploader">
              <ImageUpload
                image={image}
                setImage={setImage}
              />
            </div>
          </div>

          <button type="submit" className="btn mt-4 mb-3">Crear Platillo</button>
          { msg && <Alerta alerta={alerta}/>
            
           }
    
        </form>
    )
}

export default FormPlatillo;