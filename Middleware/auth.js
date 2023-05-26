//import modulos
const jwt = require ('jsonwebtoken');
//importar cve secreta

// Funcion de autenticación

const auth = (req, res, next) =>{
    console.log('desde auth');
    // //Comprobar si llega cabecera de auth
    // if(req.headers.authorization){
    //     return res.status(403).send({
    //         status: 'error',
    //         msg: 'La petición no tiene la cabecera de autorización'
    //     });
    // }
    
    // //limpiar token
    // let token = req.headers.authorization.replace(/['"]+g/, '');
    
    // //decodificar el token
    // try {
    //     let payload = jwt.decode(token, process.env.JWT_SECRET);
        
    //     //Comprobar expiracion de token
       

    // } catch (error) {
    //     return res.status(404).send({
    //         status: 'error',
    //         msg: 'Token invalido',
    //         error
    //     });
    // }


    // //Agregar datos de usuario a request
    
    // //Pasar a ejecucion de acción
}

module.exports = auth;
