const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema;


let usuarioSchema = new Schema({
    nick: {
        type: String,
        unique: true,
        required: [true, "nick required"]
    },
    password: {
        type: String,
        required: [true, "password required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email required"]
    },
    sexo: {
        type: String,
        required: [true, "gender required"]
    },
    nacimiento: {
        type: String,
        required: [true, "birth required"]
    },
    imagen: {
        type: String,

    },
    admin: {
        type: Boolean,
        required: false,
        default: false
    }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} repete' });

module.exports = mongoose.model('Usuario', usuarioSchema);