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


module.exports = funciones
    
      
  