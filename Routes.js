
// funcion que recibe una instancia de express y le configura las rutas
const pagesControllers
const rutas = (app) => {
    app.get("/", (req, res) => {

        //   app.get("/multiplicar", (req, res) => {
        //     console.log("obtuve el objeto", req.query);
        //   const resultado = req.query.num1 = req.querynum2;
        pagesControllers.showhome(req, res);
        //});

        //app.get("/productos", (req, res) => {
        //    res.sendFile("productos.html", { root: "./views" });
    });
    app.get("/sobre-nosotros", (req, res) => {
        res.render("sobrenosotros.njk" );

    });

        
    
};







    module.exports = rutas;
