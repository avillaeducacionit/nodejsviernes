const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// parse various different custom JSON types as JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

const moduloVersion = require("./src/version");
const moduloApi = require("./src/api");
const moduloCookie = require("./src/cookie");

app.use("/version", moduloVersion);
app.use("/api", moduloApi);
app.use("/cookies", moduloCookie);

app.listen(8080, () => {
    console.log("Inicializado en el puerto 8080");
})