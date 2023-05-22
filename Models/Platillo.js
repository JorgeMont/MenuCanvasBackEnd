const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    nombre: {type: String, required: true, trim: true},
    precio: {type: Number, required: true, trim: true},
    categoria: {type: String, required: true, trim: true},
    
    descripcion: {type: String, required: true, trim: true},
    foto: {type: String, required: true},
    menu: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu'}
});

module.exports = mongoose.model("Platillo", schema);