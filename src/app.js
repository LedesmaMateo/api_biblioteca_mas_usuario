const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");


require('dotenv').config();

// Configuracion Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience: 'http://localhost:3000/api/productos',
  issuerBaseURL: 'https://dev-srt4y8e4a7kzusdu.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});


const app = express();
app.use(express.json());

// Importamos los Router 
const librosRouter = require("./routes/libros");
const usuarioRouter = require("./routes/usuarios");

//Configuramos el middleware de autenticacion
app.use("/api/libros", autenticacion,  librosRouter);
app.use("/api/usuarios",autenticacion, usuarioRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app;