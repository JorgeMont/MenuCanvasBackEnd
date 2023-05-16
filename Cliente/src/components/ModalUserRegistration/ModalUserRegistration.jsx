import './ModalUserRegistration.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import {SiGmail} from "react-icons/si";
import {GrFacebook} from "react-icons/gr";
import {BsFillCheckCircleFill, BsFillExclamationTriangleFill, BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import { useForm, } from '../../hooks/useForm';
import CanvasImg from '../../images/MENUCANVAS.jpg'


const initialForm = {
    name:"",
    apellido:"",
    email:"",
    password:"",
    password2:""

};

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+[A-Za-zÑñÁáÉéÍíÓóÚú]+[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+[A-Za-zÑñÁáÉéÍíÓóÚú]+[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

    if (!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido."
    }else if (!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' es incorrecto."
    }


    if (!form.apellido.trim()){
        errors.apellido = "El campo 'Apellido' es requerido."
    }else if (!regexName.test(form.apellido.trim())){
        errors.apellido = "El campo 'Apellido (s)' es incorecto."
    }

    if (!form.email.trim()){
        errors.email = "Introduzca un 'Email'."
    }else if (!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto."
    }

    if (!form.password.trim()){
        errors.password = "Introduzca una 'Contraseña'."
    }else if (!regexPassword.test(form.password.trim())){
        errors.password = "La 'Contraseña' debe tener entre 8 y 20 caracteres e incluir al menos 1 letra, 1 número y 1 carácter especial!."
    }

    if (!form.password2.trim()){
        errors.password2 = "Introduzca una 'Contraseña'."
        
    }else if (form.password !== form.password2){
        errors.password2 = "Las 'Contraseñas' no son iguales..."
    }

    return errors;

};

function ModalUserRegistration() {
    const {
        form,
        errors, 
        //loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit,
        showPassword,
        setShowPassword,
        showPassword2,
        setShowPassword2  
    } = useForm(initialForm, validationsForm);


  return (<>

  <div className='loginSesion'>
    <div className="userRegistracion__form">   
        <h1>Crea una cuenta</h1>   
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label></Form.Label>
                    <div>
                        <Form.Control
                            type="text"
                            name='name'
                            placeholder="Nombre"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onKeyUp={handleBlur}
                            value={form.name}
                            required
                            id="modal-input"
                        />
                        {!errors.name && form.name.length !==0 && <BsFillCheckCircleFill id="IconoValidacion"/>}
                    </div>
                    
                </Form.Group>
                {errors.name && <p id='MensajeError'> {errors.name} </p>}
                
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label></Form.Label>
                <div>
                <Form.Control
                    type="text"
                    name='apellido'
                    placeholder="Apellido"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyUp={handleBlur}
                    value={form.apellido}
                    required
                    id="modal-input"         
                />
                
                
                {!errors.apellido && form.apellido.length !==0 && <BsFillCheckCircleFill id="IconoValidacion"/>}
                </div>
                
                </Form.Group>
                {errors.apellido && <p id='MensajeError'> {errors.apellido} </p>}

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label></Form.Label>
                    <div>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="Correo"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onKeyUp={handleBlur}
                        value={form.email}
                        required
                        //autoFocus
                        id="modal-input"
                    />
                
                
                    {!errors.email && form.email.length !==0 && <BsFillCheckCircleFill id="IconoValidacion"/>}
                    </div>               
                </Form.Group>
                {errors.email && <p id='MensajeError'> {errors.email} </p>}

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
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
                    required
                    //autoFocus
                    id="modal-input"
                />
                {showPassword ? <BsFillEyeFill id='showPassword' onClick={() => setShowPassword (!showPassword)} /> : <BsFillEyeSlashFill id='showPassword' onClick={() => setShowPassword (!showPassword)}/>}
                
                {!errors.password && form.password.length !==0 && <BsFillCheckCircleFill id="IconoValidacion"/>}  
                </div>
                </Form.Group>
                {errors.password && <p id='MensajeError'> {errors.password} </p>}

                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"              
                >
                <Form.Label></Form.Label>
                <div>
                <Form.Control 
                    type={showPassword2 ? "text" : "password"}
                    name='password2'
                    placeholder="Confirmar Contraseña"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyUp={handleBlur}
                    value={form.password2}
                    id="modal-input"
                    
                />
                
                {showPassword2 ? <BsFillEyeFill id='showPassword' onClick={() => setShowPassword2 (!showPassword2)} /> : <BsFillEyeSlashFill id='showPassword' onClick={() => setShowPassword2 (!showPassword2)}/>}
                {!errors.password2 && form.password2.length !==0 && <BsFillCheckCircleFill id="IconoValidacion"/>}
                </div>
                </Form.Group>
                {errors.password2 && <p id='MensajeError'> {errors.password2} </p>}
                

                <Button variant="primary" type='submit'  id="registrar-btn" href='/profile'>
                    Registrar
                    
                </Button>
                {/*      
                {response && <p id="MensajeExito" > Registro enviado exitosamente!</p>}
                */}
                <div id="MensajeError">
                {Object.keys(errors).length !== 0 &&
                <p> 
                    <BsFillExclamationTriangleFill/> 
                    <b>Error:</b> Por favor rellena el formulario correctamente. 
                </p>
                }
            </div>

            </Form>
           
            <Modal.Footer id="modal-footer">
            <p>O registrate con</p>
            <div className="modal-footer-images">
                <ul>
                    <li><a href="/"> <i><SiGmail/></i> </a></li>
                    <li><a href="/"> <i><GrFacebook/></i> </a></li>
                </ul>
            </div>
            <a href="/signup">Iniciar Sesion</a>
            </Modal.Footer>
     
    </div>

    <div className="loginSesion__card">
                <Card border="dark"  style={{textAlign:'center'}} className="p-0 m-5" width="200 rem" >
                    <Card.Img variant="top" src={CanvasImg} width="100%" height="300rem"/>
                    <Card.Body  >
                        <Card.Title >MENU CANVAS</Card.Title> 
                    </Card.Body>
        
                    <Card.Body >
                        <Card.Link href="/planes">Conoce nuetros planes</Card.Link>   
                    </Card.Body>
                </Card>
        </div>


</div>

    

    </>
  )
}

export default ModalUserRegistration;
