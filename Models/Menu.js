const mongoose = require ('mongoose');
const eschema = mongoose.Schema;

const Platillo = require('./Platillo ');

const schemaMenu = new eschema({
    nombre: {type: 'String', required: true},
    categorias: {type: 'Array', required: true},
    platillos: {type: [Platillo], required: false}
});

module.exports = mongoose.model('Menu', schemaMenu);