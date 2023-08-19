const express = require("express")
const exphbs = require("express-handlebars")
const app = express()
const articulos = require("./src/bussinesslogic/articulos")

app.engine("hbs", exphbs.engine({
    defaultLayout: "site",
    extname :".hbs"
}));

app.get("/", (req,res) => {
    articulos.ObtenerTodos((datos) => {

        for (let i = 0; i < datos.length; i++) {
            datos[i].sale = datos[i].price < 500;
        }

        res.render("home", {
            articulos: datos
        });
    })
})

app.set("view engine", "hbs");

app.listen(8080);