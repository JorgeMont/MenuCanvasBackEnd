

const express = require('express');
const router = express.Router();
//import Usuario from '../Models/Usuario';
const Usuario = require('../Models/Usuario');

//Crear nuevo usuario
router.post('/', async (req, res) => {
   console.log('Se recibio post');
   //  console.log(req.nombre);
   const { nombre, apellido, correo, edad } = req.body;
   console.log(req.body);
   
   const usuario = new Usuario({ nombre, apellido, correo, edad });
   await usuario.save().then(data => {
      console.log(data);
   }
   ).catch(err => {
      console.log({ message: err });
   });
   console.log('Done');
});

//Obtener usuarios 
router.get ('/', async ( req, res) => {
   console.log('Se recibio get')

   
   const usuario = await Usuario.find ({});

      if (!usuario){
         res.status(404).send ({
            error: 'No se encontro ningun registro en la base de datos'
         })
      }

      res.status(200).send(usuario)
      console.log(usuario)


})


//obtener usuario por ID
router.get ('/:id', async (req, res ) => {
   console.log ('Se recibo GET')

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

module.exports = router;