const express = require('express');
const router = express.Router();
const Incidencia = require('../models/incidencias'); // Schema de Incidencia
const Respuesta = require('../models/respuestas');

router.put('/respuesta', function(req, res) {
    let body = req.body;
    let respuesta = new Respuesta({
        nick: body.nick,
        descripcion: body.descripcion,
        fecha: body.fecha
    });

    let id = req.query.id;

    Incidencia.findByIdAndUpdate({ _id: id }, { $push: { respuestas: respuesta } }, (err, incidenciaDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true
        });
    })
});

router.get("/respuesta", function(req, res) {
        let id = req.query.id;

        Incidencia.findById({ _id: id }, (err, incidenciaDB) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({

                respuestas: incidenciaDB.respuestas
            });
        })
    })
    //

router.put('/delrespuesta', function(req, res) {
    let incidencia = req.query.incidencia;
    let respuesta = req.query.respuesta;
    console.log(incidencia);
    console.log(respuesta);
    Incidencia.update({ _id: incidencia }, { $pull: { "respuestas": { _id: respuesta } } })
        .exec((err, incidenciaDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json({
                ok: "true"

            });
        })
});

module.exports = router;