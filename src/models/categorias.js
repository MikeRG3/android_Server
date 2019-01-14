const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator')


let Schema = mongoose.Schema;


let categoriaSchema = new Schema({

    nombre: {
        type: String,
        required: [true, "Category required"]
    }
});



module.exports = mongoose.model('Categoria', categoriaSchema);