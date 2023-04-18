const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const schemaUsuario = new eschema({
    nombre: {type: 'String', required: true},
    apellido: {type: 'String', required: true},
    correo: {type: 'String', required: true},
    edad: {type: 'Number', required: true}
});

module.exports = mongoose.model('Usuario', schemaUsuario);