const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path")

// parse various different custom JSON types as JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,"external")));

app.engine("hbs", exphbs.engine({
    defaultLayout: "main",
    extname: "hbs"
}));

app.set("view engine", "hbs");

const moduloApi = require("./src/api");
const moduloUI = require("./src/ui")

app.use("/api", moduloApi);
app.use("/", moduloUI)

module.exports = app