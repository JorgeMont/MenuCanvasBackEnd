const express = require('express');
const router = express.Router();
const Usuario = require('../Models/Usuario')
const generarJWT = require('../helpers/generarJWT');
const generarId = require('../helpers/generarId');
const verificarAutorizacion = require('../Middleware/verificarAutorizacion');
const perfil = require('../userController');



//Crear nuevo usuario
router.post('/', async (req, res) => {
   const { nombre, apellido, correo, password, edad, role, token} = req.body;
   const existsUser = await Usuario.findOne({correo});
   if(existsUser){
      const error = new Error('Ya existe un usuario registrado con esa cuenta de correo.');
      res.status(400).json({msg: error.message});
   }
   
   const usuario = new Usuario({ nombre, apellido, correo, password, role, edad, token});
   usuario.token = generarId();
   await usuario.save().then(data => {
      res.status(200).send ({
         msg: 'Usuario creado correctamente'
      })
   }
   ).catch(err => {
      console.log({ message: err });
   });

});

//Obtener usuarios 
router.get ('/', async ( req, res) => {

   const usuario = await Usuario.find ({}).populate('restaurantes', {
      nombre: 1,
      menus: 1
   });

      if (!usuario){
         res.status(404).send ({
            error: 'No se encontro ningun registro en la base de datos'
         })
      }

      res.status(200).send(usuario);
})


//obtener usuario por ID
router.get ('/:id', async (req, res ) => {
   const {id} = req.params;
   const usuario = await Usuario.findById (id);

   if (!usuario) {
      res.status(404).send({ 
        error: 'No se encontro ningún registro en la base de datos'
      })
    }

    res.status(200).send(usuario)


})


//Editar usuario
router.patch ('/:id', async (req, res) => {
   console.log ('Se recibio patch')

   const {id} = req.params;
   const bodyParams = {...req.body}
   const updateUsuario = await Usuario.findByIdAndUpdate( id, bodyParams, {new: true} );

   res.status(201).send(updateUsuario)
})

//Eliminar Usuario
router.delete ('/:id', async (req, res) => {
   
   const {id} = req.params;
   const deleteUsuario = await Usuario.findByIdAndDelete(id)

   if (!deleteUsuario){
      res.status(404).send({
         error: 'No se encontro ningún registro en la base de datos '
      })
   }
   res.sendStatus(204);

})



// Autenticación

router.post('/login', async (req, res) => {
   const { correo, password} = req.body;
   const usuario = await Usuario.findOne({correo});
   if(!usuario){
      const error = new Error('El usuario no existe.');
      res.status(400).json({msg: error.message});
   }


   if(!usuario.confirmacion){
      const error = new Error('Tu cuenta no ha sido confirmada.');
      res.status(403).json({msg: error.message});
   }

   if(await usuario.checkPassword(password)){
      res.json({
         _id: usuario._id,
         nombre: usuario.nombre,
         correo: usuario.correo,
         token: generarJWT(usuario._id),
         role: usuario.role,
         edad: usuario.edad
      })
   }else{
      const error = new Error('El password no es válido.');
      res.status(403).json({msg: error.message});
   }
   
});


router.get('/confirmar/:token', async (req , res) => {
   const {token} = req.params;
   const confirmUser = await Usuario.findOne({token});
   if(!confirmUser){
      const error = new Error('Token no válido');
      res.status(403).json({msg: error.message});
   }
   
   try {
      confirmUser.confirmacion = true;
      confirmUser.token = '';
      await confirmUser.save();
      res.json({ msg: 'Usuario confirmado Exitosamente.'})
   } catch (error) {
      console.log(error);
   }
});


router.post('/olvide-password', async (req, res) => {
   const {correo} = req.body;
   const usuario = await Usuario.findOne({correo});
   if(!usuario){
      const error = new Error('El usuario no existe.');
      res.status(400).json({msg: error.message});
   }

   try {
      usuario.token = generarId();
      await usuario.save();
      res.json({ msg: 'Se ha enviado un correo con instrucciones a la cuenta de email registrada.' });
      console.log(usuario);
   } catch (error) {
      console.log(error);
   }
});


router.get('/olvide-password/:token', async (req, res) => {
   const {token} = req.params;
   const tokenValido = await Usuario.findOne({token});
   if(tokenValido){
      res.json({ msg: "Token válido y el usuario existe" });
      console.log('Token válido');
   }else{
      const error = new Error('El token no es válido.');
      res.status(403).json({msg: error.message});
   }
});


router.post('/olvide-password/:token', async (req, res) => {
   const {token} = req.params;
   const {password} = req.body;

   const usuarioNuevoPassword = await Usuario.findOne({token});
   console.log(usuarioNuevoPassword);
   if(usuarioNuevoPassword){
      usuarioNuevoPassword.password = password;
      usuarioNuevoPassword.token = "";

      try {
         await usuarioNuevoPassword.save();
         res.json({msg: 'Password Modificado Correctamente.'});
      } catch (error) {
         console.log(error);
      }
   }else{
      const error = new Error('El token no es válido.');
      res.status(403).json({msg: error.message});
   }
   console.log(token);
   console.log(password);
});






router.get('/profile', verificarAutorizacion, perfil);


module.exports = router;