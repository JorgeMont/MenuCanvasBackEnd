
//base de datos moongose
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const conexion = async() => {
    try {
        await mongoose.connect(uri);
        console.log(`Conexion Exitosa a la BD`);
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos.")
    }
}

module.exports = conexion;

