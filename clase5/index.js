const express = require("express")
const exphbs = require("express-handlebars")
const app = express()

app.engine("hbs", exphbs.engine({
    defaultLayout: "main",
    extname :".hbs"
}))

app.set("view engine", "hbs")

app.get("/", (req,res) => {
    res.render("home")
})

app.get("/detalle", (req, res) => {
    let dato = {
        titulo: "Este dato esta en el servidor",
        persona: {
            nombre: "Andres",
            apellido: "Villa"
        },
        cursos: [
            {
                nombre: "Node JS"
            },
            {
                nombre: "Mongo FUndamentos"
            }
        ]
    }

    res.render("detalle", dato);
})

app.listen(8080);