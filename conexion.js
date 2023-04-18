//base de datos moongose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/menuApp');

//conexion a la base de datos
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', function() {
    console.log('Conectado a MongoDB');
})

module.exports = db;