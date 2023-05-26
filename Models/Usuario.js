const mongoose = require('mongoose');
const eschema = mongoose.Schema;
const bcrypt = require('bcrypt')


const schemaUsuario = new eschema({
    nombre: {type: 'String', required: true, trim: true},
    apellido: {type: 'String', required: true, trim: true},
    correo: {type: 'String', required: true, unique: true, trim: true},
    password: {type: 'String', required: true, trim: true},
    role: {type: 'String', default: 'role_user'},
    edad: {type: 'Number', required: false, trim: true},
    token: {type: 'String'},
    confirmacion: {type: 'Boolean', default: false},
    restaurantes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante'}],
},{
    timestamps: true
});

schemaUsuario.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


schemaUsuario.methods.checkPassword = async function (passwordForm){
    return await bcrypt.compare(passwordForm, this.password);
}

module.exports = mongoose.model('Usuario', schemaUsuario); 