const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    foto: {type: String, required: true}
});

const model = mongoose.model("Platillos", schema);
module.exports = model;

