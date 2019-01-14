const express = require('express');
const router = express.Router();
const Incidencia = require('../models/incidencias'); // Schema de Usuario



// GET INCIDENCIAS

router.get('/incidencias', function(req, res) {

    Incidencia.find({})
        .exec((err, incidenciasDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json(incidenciasDB);
        })

});

router.get('/incidencias/:id', function(req, res) {
    let id = req.params.id;
    res.json(id);
});

// INSERT USERS

router.post('/incidencias', function(req, res) {
    let body = req.body;
    let incidencia = new Incidencia({
        id_usuario: body.id_usuario,
        titulo: body.titulo,
        descripcion: body.descripcion,
        categoria: body.categoria

    }); //Instancia del Schema de Usuario.

    incidencia.save((err, incidenciaDB) => {
        if (err) {
            return res.status(400).json({
                ok: "false",
                err
            });
        }

        res.json({
            ok: "true",
            incidenciaDB
        });

    })
})


module.exports = router;