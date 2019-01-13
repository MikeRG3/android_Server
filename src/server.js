require("./config/config")

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//Settings on express
app.set('port', process.env.PORT); //Configuramos el puerto:el del servidor o si es localhost, el 3000


//MiddleWares (funciones que se ejecuten antes de las rutas)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); //(body parser --> convierte el JSON para que lo entienda el server --actualmente viene instalado con node)

// Routes (comunica servidor con navegador)
app.use(require('./routes/usuarios'));



//Starting server

app.listen(app.get('port'), () => {
    console.log("Server on port", process.env.PORT);
});