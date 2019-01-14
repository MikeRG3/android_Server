const mongoose = require('mongoose');
require("../models/categorias");
//const uniqueValidator = require('mongoose-unique-validator')
const Usuario = mongoose.model("Usuario");
const Categoria = mongoose.model("Categoria");

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
        default: new Date()
    },
    categoria: {
        type: Schema.ObjectId,
        ref: "Categoria",
        required: [true, "Id_Category required"]
    }
});



module.exports = mongoose.model('Incidencia', incidenciasSchema);