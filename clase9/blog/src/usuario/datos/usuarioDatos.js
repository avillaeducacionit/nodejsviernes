const usuarioModel = require("./usuarioModel");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blogeducacionit");

const insert = (usuario, callback) => {

    buscarUsuarioPorLogin(usuario.login, (error, usuario_existente)  => {
        if(usuario_existente) {
            callback("El usuario ya existe");
            return; //En este caso necesito el return para que no se ejecute el resto del codigo del request
        }

        if(error) {
            callback(error);
        } else {
            const nuevoUsuario = new usuarioModel(usuario);
            nuevoUsuario.save()
                .then((datosGuardados) => callback(null,datosGuardados))
                .catch((error)=> callback(error));        
        }
    })
}

const buscarUsuarioPorLogin = (userlogin, callback) => {
    usuarioModel.findOne({ login: userlogin })
        .then((usuario) => callback(null, usuario))
        .catch((error) => callback(error))
}

const buscarUsuario = (id, callback) => {
    usuarioModel.findById(new mongoose.Types.ObjectId(id))
    .then(callback);
}

module.exports = {
    Insert: insert,
    FindById: buscarUsuario,
    BuscarUsuarioPorLogin: buscarUsuarioPorLogin
}