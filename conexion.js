//base de datos moongose
const mongoose = require('mongoose');


const uri = 'mongodb+srv://appuserka:cRnCMK1Y0QCyH8a1@cluster0.upfbfmv.mongodb.net/?retryWrites=true&w=majority';

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

