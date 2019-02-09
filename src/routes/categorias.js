const express = require('express');
const router = express.Router();
const Categoria = require('../models/categorias'); // Schema de Usuario



// GET 

router.get('/categorias', function(req, res) {

    Categoria.find({})
        .exec((err, categoriaDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json({
                categorias: categoriaDB
            });
        })

});

router.get('/categoria', function(req, res) {
    let nombre = req.query.nombre;

    Categoria.find({ nombre }, function(err, categoriaDB) {
        if (err) throw err;
        res.json({
            categorias: categoriaDB
        })
    })

});

// INSERT 

router.post('/categorias', function(req, res) {
    let body = req.body;
    let categoria = new Categoria({
        nombre: body.nombre

    }); //Instancia del Schema de Usuario.

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: "false",
                err
            });
        }

        res.json({
            ok: "true",
            categoriaDB
        });

    })
})


module.exports = router;