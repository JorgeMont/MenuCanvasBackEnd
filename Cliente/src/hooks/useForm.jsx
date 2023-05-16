//import { validate } from "json-schema";
import { useState } from "react"

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState ({});
    const [loading, setLoading] = useState (false);
    const [response, setResponse] = useState (null);
    const [showPassword, setShowPassword] = useState (false);
    const [showPassword2, setShowPassword2] = useState (false);

    const handleChange = (e) => {
        setForm ({...form, [e.target.name]:e.target.value})
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    

    //logica del boton para enviar la data
    const handleSubmit = (e) => {
        e.prevent.Default();
        setErrors (validateForm(form));
        //validamos que nuestro formulario no tenga errores
        if (Object.keys(errors).length === 0){
            alert ("Registro enviado correctamente")
            //setLoading(true);
            //Aqui tendria que ir una funcion para un POST a la base de datos

            //cuando llegue la respuesta de la peticion POST es necesario 
            //cambiar setLoading (false)
            //setForm(initialForm)  //para limpiar nuestro formulario  
            //setResponse(true)  
            //setTimeout(()=> setResponse(false), 3000)
        }else{
           return;
        }
    }; 

    return {
        form,
        
        errors, 
        loading, 
        response, 
        handleChange, 
        handleSubmit, 
        handleBlur,
        showPassword,
        setShowPassword,
        showPassword2,
        setShowPassword2
    }

    
}