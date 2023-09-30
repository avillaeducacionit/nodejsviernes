const app = require("./app.js")

var server = app.listen(8080, () => {
    console.log("Inicializado en el puerto 8080");
})