const categoriaModel = require("./categoriasModel");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blogeducacionit");

// {id: 1, nombre: "Deportes"}
const insert = (categoria, callback) => {
    const nuevaCategoria = new categoriaModel(categoria);
    nuevaCategoria.save()
        .then((datosGuardados) => callback(null,datosGuardados))
        .catch((error)=> callback(error));
}

const listar = (callback) => {
    categoriaModel.find()
    .then(callback);
}

const buscarPorId = (id, callback) => {
    categoriaModel.findById(new mongoose.Types.ObjectId(id))
    .then(callback);
}

module.exports = {
    Insert: insert,
    Listar: listar,
    BuscarPorId: buscarPorId
}