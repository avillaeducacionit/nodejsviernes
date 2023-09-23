const app = require("./app.js")

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
