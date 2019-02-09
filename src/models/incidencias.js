const mongoose = require('mongoose');
require("../models/categorias");
require("../models/respuestas");
//const uniqueValidator = require('mongoose-unique-validator')
const Usuario = mongoose.model("Usuario");
const Categoria = mongoose.model("Categoria");
const Respuesta = mongoose.model("Respuesta");

let Schema = mongoose.Schema;


let incidenciasSchema = new Schema({
    id_usuario: {
        type: Schema.ObjectId,
        ref: "Usuario",
        required: [true, "Id_User required"]
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
        type: Schema.ObjectId,
        ref: "Categoria",
        required: [true, "Id_Category required"]
    },
    respuestas: [{
        id_usuario: String,
        descripcion: String,
        fecha: {
            type: Date,
            default: Date.now
        }
    }]
});



module.exports = mongoose.model('Incidencia', incidenciasSchema);