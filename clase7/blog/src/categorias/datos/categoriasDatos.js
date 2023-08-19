const categoriaModel = require("./categoriasModel");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blogeducacionit");

// {id: 1, nombre: "Deportes"}
const insert = (categoria, callback) => {
    const nuevaCategoria = new categoriaModel(categoria);
    nuevaCategoria.save().then(callback);
}

module.exports = {
    Insert: insert
}