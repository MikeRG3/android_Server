const express = require('express');
const router = express.Router();
const Incidencia = require('../models/incidencias'); // Schema de Usuario
const Categoria = require('../models/categorias'); // Schema de Usuario



// GET INCIDENCIAS POR CATEGORIA

router.get('/incidencias', function(req, res) {
    let nombreCategoria = req.query.categoria;

    Incidencia.find({ categoria: nombreCategoria }).sort({ fecha: 1 })
        .exec((err, incidenciasDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json({
                incidencias: incidenciasDB
            });

        })

});

router.get('/incidencia', function(req, res) {
    let id = req.query.id;
    Incidencia.find({ _id: id })
        .exec((err, incidenciaDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json({
                respuestas: incidenciaDB[0].respuestas
            });
        })
});

router.get('/buscadorincidenciatitulo', function(req, res) {
    let buscar = req.query.buscar;
    Incidencia.find({ titulo: { $regex: ".*" + buscar + ".*", $options: 'i' } })
        .exec((err, incidenciaDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json({
                incidencias: incidenciaDB
            });
        })
});
router.get('/buscadorincidenciadescripcion', function(req, res) {
    let buscar = req.query.buscar;
    Incidencia.find({ descripcion: { $regex: ".*" + buscar + ".*", $options: 'i' } })
        .exec((err, incidenciaDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json({
                incidencias: incidenciaDB
            });
        })
});

router.get('/misincidencias', function(req, res) {
    let nick = req.query.nick;
    Incidencia.find({ nick_usuario: nick }).sort({ fecha: 1 })
        .exec((err, incidenciaDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });

            res.json({
                incidencias: incidenciaDB
            });
        })
});

// INSERT 

router.post('/incidencias', function(req, res) {
    let body = req.body;
    let incidencia = new Incidencia({
        nick_usuario: body.nick_usuario,
        imagen_usuario: body.imagen_usuario,
        titulo: body.titulo,
        descripcion: body.descripcion,
        fecha: body.fecha,
        categoria: body.categoria

    }); //Instancia del Schema de Usuario.

    incidencia.save((err, incidenciaDB) => {
        if (err) {
            console.log(err);
            return res.status(200).json({
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



router.delete('/incidencia', function(req, res) {
    let id = req.query.id;
    Incidencia.findByIdAndDelete({ _id: id })
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