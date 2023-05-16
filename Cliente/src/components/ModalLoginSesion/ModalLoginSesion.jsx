import './ModalLoginSesion.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {BsFillCheckCircleFill, BsFillExclamationTriangleFill, BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import {GrFacebook} from "react-icons/gr";
import { useForm } from '../../hooks/useForm';
import CanvasImg from '../../images/MENUCANVAS.jpg';


const initialForm = {
    email:"",
    password:""

};

const validationsForm = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

    if (!form.email.trim()){
        errors.email = "Introduzca su 'Usuario'."
    }else if (!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Usuario' es incorrecto."
    }

    if (!form.password.trim()){
        errors.password = "Introduzca una 'Contraseña'."
    }else if (!regexPassword.test(form.password.trim())){
        errors.password = "La 'Contraseña' debe tener entre 8 y 20 caracteres e incluir al menos 1 letra, 1 número y 1 carácter especial!."
    }

    return errors;

};




const ModalLoginSesion = () =>{

    const {
        form, 
        errors, 
        handleChange, 
        handleBlur, 
        handleSubmit,
        showPassword,
        setShowPassword
    } = useForm (initialForm, validationsForm);

    return (

        <>

            <div className='loginSesion'>

                <div className="loginSesion__form">
                    <h1>Inicia sesión</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <div>
                            <Form.Control 
                                type="email"
                                name='email' 
                                placeholder="usuario"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onKeyUp={handleBlur}
                                value={form.email}
                                id="modal-input"
                                required 
                            />
                            {!errors.email && form.email.length !==0 && <BsFillCheckCircleFill id="IconoValidacion"/>}
                            </div>
                        </Form.Group>
                        {errors.email && <p id='MensajeError'> {errors.email} </p>}


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label></Form.Label>
                            <div>
                            <Form.Control 
                                type={showPassword ? "text" : "password"}
                                name='password' 
                                placeholder="Contraseña"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onKeyUp={handleBlur}
                                value={form.password}
                                id="modal-input"
                                required
                            />
                            {showPassword ? <BsFillEyeFill id='showPassword' onClick={() => setShowPassword (!showPassword)} /> : <BsFillEyeSlashFill id='showPassword' onClick={() => setShowPassword (!showPassword)}/>}
                            {!errors.password && form.password.length !==0 && <BsFillCheckCircleFill id="IconoValidacion"/>}
                            </div>
                        </Form.Group>
                        {errors.password && <p id='MensajeError'> {errors.password} </p>}
                        
                        <div className="loginSesionBtn">
                            <Button variant="primary" type="submit">
                                Iniciar Sesión
                            </Button>

                            <div id="MensajeError">      
                                {Object.keys(errors).length !== 0 &&
                                <p> 
                                    <BsFillExclamationTriangleFill/> 
                                    <b>Error:</b> Por favor rellena el formulario correctamente. 
                                </p>
                                }

                            

                             </div>


                        </div>

                    </Form>

                    <Modal.Footer id="modal-footer">
                        <p>Inicia Sesion con</p>
                        <div className="modal-footer-images">
                            <ul>
                                <li><a href="/"> <i><SiGmail/></i> </a></li>
                                <li><a href="/"> <i><GrFacebook/></i> </a></li>
                            </ul>
                        </div>
                    
                    </Modal.Footer>
   
                </div>

                

                <div className="loginSesion__card">
                <Card border="dark"  style={{textAlign:'center'}} className="p-0 m-5" width="200 rem" >
              <Card.Img variant="top" src={CanvasImg} width="100%" height="300rem"/>
              <Card.Body  >
                  <Card.Title >MENU CANVAS</Card.Title> 
              </Card.Body>
        
              <Card.Body >
                  <Card.Link href="#">Conoce nuetros planes</Card.Link>   
              </Card.Body>
          </Card>
                </div>

            </div>
    </>
    )
}


export default ModalLoginSesion;