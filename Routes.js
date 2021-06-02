

const pagesControllers = require("./Controllers/pagesControllers")
// funcion que recibe una instancia de express y le configura las rutas
const rutas = (app) => {
    app.get("/", (req, res) => {

       
        pagesControllers.showHome(req, res);
               
           });
    app.get("/sobre-nosotros", (req, res) => {
        res.render("sobrenosotros.njk" );

    });
        
    };
    module.exports = rutas;
