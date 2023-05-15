require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
// const { mongoose } = require('./conexion');
const conexion = require('./conexion');

const whiteList = ['http://localhost:3000'];
const options = {
  origin: function (origin, callback){
    if(whiteList.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error("Error de Cors"));
    }
  }
};

app.use(cors(options));
app.use(express.json());


conexion();

app.use('/api/usuario',require('./Rutas/usuario-rutas'));
app.use('/api/platillo',require('./Rutas/platillo-rutas'));
app.use('/api/menu', require('./Rutas/menu-rutas'));
app.use('/api/restaurante', require('./Rutas/restaurante-rutas'));



app.set('port', process.env.PORT || 3030);
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`); 
  });

