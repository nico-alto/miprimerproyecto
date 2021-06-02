const express = require('express');
const app = express(); //Crea una instanica de Express


// defino rutas. creo una instancia de express en la variable app
const rutas = require("./routes")
// pasa la variable app (instancia de express ) a la  función de rutas
rutas(app);
//Configuración para Nunjucks que usaremos en todos los proyectos
const nunjucks = require('nunjucks');
nunjucks.configure("views", {
    autoescape: true,
    express: app,

});
//le decimos a Express que converse con Nunjucks
app.set("view engine", "njk");



//levanto el servidor. Lo pongo a escuchar...pedidos al puerto 3000.

app.listen(3000, () => console.log("¡Servidor corriendo en el puerto 3000!"));

