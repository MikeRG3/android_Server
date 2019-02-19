const mongoose = require('mongoose');


let Schema = mongoose.Schema;


let respuestasSchema = new Schema({
    nick: {
        type: String,
        required: [true, "User required"]
    },
    imagen: {
        type: String,
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