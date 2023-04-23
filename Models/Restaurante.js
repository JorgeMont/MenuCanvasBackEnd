const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const schemaRestaurante = new eschema({
  nombre: { type: "String", required: true },
  Maps: { type: "String", required: true },
  telefono: { type: "Number", required: true },
  logo: { type: "String", required: true },
  fb: { type: "String", required: true },
  wa: { type: "String", required: false },
  ig: { type: "String", required: false },
});

module.exports = mongoose.model("Restaurante", schemaRestaurante);
