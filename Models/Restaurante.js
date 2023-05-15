const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const schemaRestaurante = new eschema({
  nombre: { type: "String", required: true, trim: true },
  Maps: { type: "String", required: true, trim: true },
  telefono: { type: "Number", required: true, trim: true },
  logo: { type: "String", required: true, trim: true },
  fb: { type: "String", required: true, trim: true },
  wa: { type: "String", required: false, trim: true },
  ig: { type: "String", required: false, trim: true },
  menus: [{type: mongoose.Schema.Types.ObjectId, ref: 'Menu'}],
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}
});

module.exports = mongoose.model("Restaurante", schemaRestaurante);
