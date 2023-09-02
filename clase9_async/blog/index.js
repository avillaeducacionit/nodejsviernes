const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

// parse various different custom JSON types as JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: "apousidioauysoiduaiopsfuhqouidausodioausdoiqwuyeoqu2e09q9swd80a8sycdpasjd",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 60000
    }
}))

const moduloVersion = require("./src/version");
const moduloApi = require("./src/api");
const moduloCookie = require("./src/cookie");
const moduloSesion = require("./src/basic_session");

app.use("/version", moduloVersion);
app.use("/api", moduloApi);
app.use("/cookies", moduloCookie);
app.use("/basicsession", moduloSesion);

app.listen(8080, () => {
    console.log("Inicializado en el puerto 8080");
})