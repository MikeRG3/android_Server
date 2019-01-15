const express = require('express');
const router = express.Router();
const Incidencia = require('../models/incidencias'); // Schema de Incidencia
const Respuesta = require('../models/respuestas');

router.put('/respuesta/:id', function(req, res) {
    let body = req.body;
    let respuesta = new Respuesta({
        id_usuario: body.id_usuario,
        descripcion: body.descripcion
    });

    let id = req.params.id;

    Incidencia.findByIdAndUpdate(id, { $push: { respuestas: respuesta } }, (err, incidenciaDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            incidenciaDB
        });
    })
});
//

// router.put('/respuesta/:id', function(req, res) {
//     let body = req.body;


//     let respuesta = new Respuesta({
//         id_usuario: body.id_usuario,
//         descripcion: body.descripcion

//     })
//     respuesta.save((err, respuestaDB) => {
//         if (err) throw err;

//         let id = req.params.id;
//         Incidencia.findByIdAndUpdate(id, { $push: { respuesta: respuestaDB.id } }, (err, incidenciaDB) => {

//             if (err) {
//                 return res.status(400).json({
//                     ok: false,
//                     err
//                 });
//             }



//             res.json({
//                 ok: true,
//                 incidenciaDB
//             });
//         })

//     });
// });

module.exports = router;