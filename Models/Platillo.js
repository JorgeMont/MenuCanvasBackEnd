const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    foto: {type: String, required: true},
    menu: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu'}
});

module.exports = mongoose.model("Platillo", schema);

