const mongoose = require('mongoose');

const Usuario = mongoose.model("Usuario");

let Schema = mongoose.Schema;


let respuestasSchema = new Schema({
    id_usuario: {
        type: Schema.ObjectId,
        ref: "Usuario",
        required: [true, "User required"]
    },
    descripcion: {
        type: String,
        required: [true, "Description required"]
    },
    fecha: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('Respuesta', respuestasSchema);