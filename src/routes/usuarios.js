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
            res.json({ usuarios: usuariosDB });
        })

});
//Obtiene los datos del usuario por ID
router.get('/usuarionick', function(req, res) {
    let nick = req.query.nick;
    Usuario.find({ nick }, function(err, usuarioDB) {
        if (err) throw err;
        res.json({

            usuario: usuarioDB[0]
        })
    })
});

router.get('/buscadorusuario', function(req, res) {
    let buscar = req.query.buscar;
    Usuario.find({ nick: { $regex: ".*" + buscar + ".*", $options: 'i' } })
        .exec((err, usuarioDB) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json({
                usuarios: usuarioDB
            });
        })
});


//LOGIN
//Comprueba usuario y contraseña
router.post('/login', function(req, res) {
    let body = req.body;
    let usuario = new Usuario({
        nick: body.nick.toLowerCase(),
        password: body.password
    });

    Usuario.find({ "nick": usuario.nick.trim(), "password": usuario.password }, (err, usuarioDB) => {
        if (err) throw err;

        let message;
        let ok;
        let admin;
        if (usuarioDB.length == 0) {
            ok = false;
            message = "Access Denied";
        } else {
            ok = true;
            message = "Access Granted";
            admin = usuarioDB[0].admin;

        }
        res.json({
            ok,
            message,
            usuarioDB: usuarioDB[0]
        })
    })

})


// INSERT USERS

router.post('/usuarios', function(req, res) {
    let body = req.body;
    let usuario = new Usuario({
        nick: body.nick.toLowerCase(),
        password: body.password,
        email: body.email,
        sexo: body.sexo,
        nacimiento: body.nacimiento,
        imagen: body.imagen,
        admin: body.admin
    }); //Instancia del Schema de Usuario.

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: "false",
                error: err.message
            });
        }

        res.json({
            ok: "true",
            usuarioDB
        });

    })
})

//UPDATE USUARIOS

router.put('/usuarios', function(req, res) {
    let _id = req.query.id;
    let body = req.body;

    let usuario = new Usuario({
        nick: body.nick,
        password: body.password,
        imagen: body.imagen,
        email: body.email,
        sexo: body.sexo,
        nacimiento: body.nacimiento,
        admin: body.admin
    });
    console.log(usuario.nick);
    Usuario.findOneAndUpdate({ _id: req.query.id }, { password: usuario.password, email: usuario.email, sexo: usuario.sexo, nacimiento: usuario.nacimiento }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: "false",
                error: err.message
            });
        }

        res.json({
            ok: true
        })
    })

});


//DELETE 
router.delete('/usuario', function(req, res) {
    let id = req.query.id;

    Usuario.findByIdAndDelete({ _id: id }, (err, usuarioDB) => {
        if (err) throw err;

        res.json({
            ok: true
        })
    })

});
module.exports = router;