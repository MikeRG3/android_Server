const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios'); // Schema de Usuario



// GET USERS

router.get('/usuarios', function(req, res) {

    Usuario.find({})
        .exec((err, usuariosDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json(usuariosDB);
        })

});

router.get('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    res.json(id);
});

// INSERT USERS

router.post('/usuarios', function(req, res) {
    let body = req.body;
    let usuario = new Usuario({
        nick: body.nick,
        password: body.password,
        email: body.email,
        admin: body.admin
    }); //Instancia del Schema de Usuario.

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: "false",
                err
            });
        }

        res.json({
            ok: "true",
            usuarioDB
        });

    })
})


module.exports = router;