const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema;


let incidenciasSchema = new Schema({
    id_usuario: {
        type: String,
        required: [true, "id required"]
    },
    title: {
        type: String,
        required: [true, "Title required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    },
    fecha: {
        type: Date,
        default: new Date()
    }
});



module.exports = mongoose.model('Incidencia', incidenciasSchema);