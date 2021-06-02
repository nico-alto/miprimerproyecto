const funciones = {
    showHome: (req, res) => {
        const today = new Date();
        const dayNo = today.getDay();
        if (dayNo === 0 || dayNo === 6) {
            res.render("home", { mensajeDia: "hoy no es un día Hábil" })
            
        }
        else {
            res.render("home", {mensajeDia: "hoy es un día Hábil"})
            
        }

    }
}


module.exports = {
    
      
    // Metemos el método send y le mandamos solamente un string
    // res.send('Ruta es: /, estamos en el home');
            
    // CAmbiar el método SEND por el método SendFile con 2 ARGUEMENTOS ...
      
    //el primero el html, y el segurndo, un objeto de javascript, y ahí suamos ROOT y le ponemos la ruta relativa
      
    //     res.sendFile("home.html", { root: "./views" });
    // });   
    

};