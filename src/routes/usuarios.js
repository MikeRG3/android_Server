const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios'); // Schema de Usuario



// GET USERS
//Obtiene todos los usuarios

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
//Obtiene los datos del usuario por ID
router.get('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    Usuario.findById(id, function(err, usuarioDB) {
        if (err) throw err;
        res.json({
            ok: true,
            usuarioDB
        })
    })
});

//LOGIN
//Comrpueba usuario y contraseña
router.post('/login', function(req, res) {
    let body = req.body;
    let usuario = new Usuario({
        nick: body.nick,
        password: body.password
    });

    Usuario.find({ "nick": usuario.nick, "password": usuario.password }, (err, usuarioDB) => {
        if (err) throw err;

        let message;
        let ok;
        if (usuarioDB.length == 0) {
            ok = false;
            message = "Access Denied";
        } else {
            ok = true;
            message = "Access Granted";
        }
        res.json({
            ok,
            message,
            admin: usuarioDB.admin
        })
    })

})


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

//UPDATE USUARIOS

router.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;

    let usuario = new Usuario({
        nick: body.nick,
        password: body.password,
        email: body.email,
        admin: body.admin
    });
    Usuario.findByOneAndUpdate(id, { password: usuario.password }, (err, usuarioDB) => {
        if (err) throw err;

        res.json({
            ok: true,
            usuarioDB
        })
    })

});


//DELETE 
router.delete('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;


    Usuario.findOneAndDelete(id, (err, usuarioDB) => {
        if (err) throw err;

        res.json({
            ok: true,
            message: "User delete"
        })
    })

});
module.exports = router;
