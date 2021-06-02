const express = require('express');
const app = express(); //Crea una instanica de Express
// a veces hay que citar al contsturctor para que el objeta funcione. Y se le pasan parámetros para cambiar en algún caso, las funcionalidades del objeto

// defino rutas. creo una instancia de express en la variable app
const rutas = require("./routes")
// pasa la variable app (instancia de express ) a la  función de rutas
rutas(app);

const nunjucks = require('nunjucks');
nunjucks.configure("views", {
    autoescape: true,
    express: app,

});
app.set("view engine", "njk");



//levanto el servidor. Lo pongo a escuchar...pedidos.

app.listen(3000, () => console.log("¡Servidor corriendo en el puerto 3000!"));

