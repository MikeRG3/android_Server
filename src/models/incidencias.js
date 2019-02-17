const mongoose = require('mongoose');
require("../models/categorias");
require("../models/respuestas");
//const uniqueValidator = require('mongoose-unique-validator')
const Usuario = mongoose.model("Usuario");
const Categoria = mongoose.model("Categoria");
const Respuesta = mongoose.model("Respuesta");

let Schema = mongoose.Schema;


let incidenciasSchema = new Schema({
    nick_usuario: {
        type: String,
        required: [true, "Nick_User required"]
    },
    imagen_usuario: {
        type: String,
    },
    titulo: {
        type: String,
        required: [true, "Title required"]
    },
    descripcion: {
        type: String,
        required: [true, "Description required"]
    },
    fecha: {
        type: Date,
        default: new Date().getTime()
    },
    categoria: {
        type: String,
        required: [true, "Id_Category required"]
    },
    respuestas: [{
        nick: {
            type: String,
            required: [true, "Nick_User required"]
        },
        descripcion: {
            type: String,
            required: [true, "Descripcion required"]
        },
        fecha: {
            type: Date,
            default: new Date().getTime()
        }
    }]
});



module.exports = mongoose.model('Incidencia', incidenciasSchema);