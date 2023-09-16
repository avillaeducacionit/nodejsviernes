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


var server = app.listen(8080, () => {
    console.log("Inicializado en el puerto 8080");
})


const ioServer = require("socket.io")(server);
let usuariosConectados = [];
ioServer.on("connection", function(socketCliente) {
    console.log("Nuevo CLiente COnectado "+ socketCliente.id);
    socketCliente.emit("mensaje", "Bienvenido");
    
    socketCliente.emit("chat message", {user: "Educacion IT", message: "Bienvenido a la sala de chat" }  );
    usuariosConectados.forEach((usuario) => {
        ioServer.emit("users",usuario);
    })

    socketCliente.on("chat message", (datos) => {
        ioServer.emit("chat message", datos);
    });
    socketCliente.on("users", (datos) => {
        usuariosConectados.push(datos);
        ioServer.emit("users", datos);
    });

});
