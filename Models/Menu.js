const mongoose = require ('mongoose');
const eschema = mongoose.Schema;



const schemaMenu = new eschema({
    nombre: {type: 'String', required: true},
    categorias: {type: 'Array', required: true},
    restaurante: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante'},
    platillos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Platillo'}]
});

module.exports = mongoose.model('Menu', schemaMenu);