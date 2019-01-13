const express = require('express');
const router = express.Router();
const app = express();
// const mysqlConnection = require("../database"); //Nos traemos la conexion con la DB

// router.get('/', (req, res) => {
//     mysqlConnection.query(' "SELECT * FROM usuarios', (err, rows, fields) => {
//         if (!err) {
//             res.json(rows);
//         } else {
//             console.log(err);
//         }
//     });
// })

router.get('/usuarios', function(req, res) {
    res.json('get Usuario');
});

router.get('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    res.json(id);
})

router.post('/usuarios', function(req, res) {
    let body = req.body;

    if (body.nick == undefined || body.password == undefined || body.email == undefined) {
        res.status(400).json({
            ok: false,
            message: "Data incomplete"
        });
    }
    res.json({ body });
})


module.exports = router;