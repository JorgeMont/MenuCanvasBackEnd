const mongoose = require ('mongoose');
const eschema = mongoose.Schema;

const schemaMenu = new eschema({
    nombre: {type: 'String', required: true},
    categorias: {type: 'Array', required: true}
});

module.exports = mongoose.model('Menu', schemaMenu);