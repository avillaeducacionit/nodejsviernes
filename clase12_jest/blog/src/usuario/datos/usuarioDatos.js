const usuarioModel = require("./usuarioModel");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blogeducacionit");

const insert = async (usuario) => {
    let usuario_existente = await buscarUsuarioPorLogin(usuario.login);
    if(usuario_existente) {
        throw new Error("Usuario Existente");
    }
    const nuevoUsuario = new usuarioModel(usuario);
    return await nuevoUsuario.save();
}

const buscarUsuarioPorLogin = async (userlogin) => {
    return await usuarioModel.findOne({ login: userlogin });
}

const buscarUsuario = async (id) => {
    return await usuarioModel.findById(new mongoose.Types.ObjectId(id));
}

module.exports = {
    Insert: insert,
    FindById: buscarUsuario,
    BuscarUsuarioPorLogin: buscarUsuarioPorLogin
}