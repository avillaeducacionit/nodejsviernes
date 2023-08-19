const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

const moduloVersion = require("./src/version");
const moduloApi = require("./src/api");

app.use("/version", moduloVersion);
app.use("/api", moduloApi);

app.listen(8080, () => {
    console.log("Inicializado en el puerto 8080");
})