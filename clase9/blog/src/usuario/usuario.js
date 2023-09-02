const express = require("express");
const router = express.Router();
const datos = require("./datos/usuarioDatos");
const usuarioDatos = require("./datos/usuarioDatos");

// objeto usaurio: { login: "andresv", pass: "1231", id: objectid }

// Crea un usuario
router.post("/" , (request,response) => {
    let usuario = request.body;
    datos.Insert(usuario, (err,datos)=> {
        if(err){
            response.status(400).send();
        } else {
            response.json(construirRespuestaUsuario(datos));
        }
    });
});

const construirRespuestaUsuario = (objMongoose) => {
    return {
        login: objMongoose.login,
        id: objMongoose._id
    }
}

// Busca usuarios
router.get("/" , (request,response) => {

});

// Busca usuarios
router.get("/:id" , (request,response) => {

});

// Actualiza un usuario
router.put("/" , (request,response) => {

});

// Crea un usuario
router.delete("/" , (request,response) => {

});

router.post("/login", (request, response) => {
    if(request.session.esta_conectado_el_usuario)
    {
        response.status(204).send();
        return; //En este caso necesito el return para que no se ejecute el resto del codigo del request
    }

    let usuario = request.body;

    usuarioDatos.BuscarUsuarioPorLogin(usuario.login, (error,usuario_encontrado) => {
        if(usuario_encontrado.pass == request.body.pass){
            request.session.esta_conectado_el_usuario = true;
            response.status(200).json({error: null});
        }else{
            response.status(400).json({error: "No se pudo iniciar sesion"});
        }
    })
});

router.post("/logout", (request, response) => {
    request.session.destroy();
    response.send();
})


module.exports = router;