const express = require('express');
const router = express.Router();

const Usuario = require('../Models/Usuario');

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

module.exports = router;