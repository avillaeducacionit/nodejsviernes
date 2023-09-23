const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

// parse various different custom JSON types as JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.engine("hbs", exphbs.engine({
    defaultLayout: "main",
    extname: "hbs"
}));

app.set("view engine", "hbs");

const moduloVersion = require("./src/version");
const moduloApi = require("./src/api");
const moduloCookie = require("./src/cookie");
const moduloVistas = require("./src/vistas/vistas")

app.use("/version", moduloVersion);
app.use("/api", moduloApi);
app.use("/cookies", moduloCookie);
app.use("/", moduloVistas)


module.exports = app