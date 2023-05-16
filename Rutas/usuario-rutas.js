const express = require('express');
const router = express.Router();
const Usuario = require('../Models/Usuario');
const generarId = require('../helpers/generarId.js');
const generarJWT = require('../helpers/generarJWT.js');



//Crear nuevo usuario
router.post('/', async (req, res) => {
   const { nombre, apellido, correo, password, edad, token} = req.body;
   const existsUser = await Usuario.findOne({correo});
   if(existsUser){
      const error = new Error('Ya existe un usuario registrado con esa cuenta de correo.');
      res.status(400).json({msg: error.message});
   }
   
   const usuario = new Usuario({ nombre, apellido, correo, password, edad, token});
   usuario.token = generarId();
   await usuario.save().then(data => {
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
      res.json({ msg: 'Usuario confirmado Correctamente.'})
   } catch (error) {
      console.log(error);
   }


});

module.exports = router;