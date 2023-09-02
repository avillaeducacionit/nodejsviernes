const express = require("express");
const router = express.Router();
const datos = require("./datos/usuarioDatos");
const usuarioDatos = require("./datos/usuarioDatos");

// objeto usaurio: { login: "andresv", pass: "1231", id: objectid }

// Crea un usuario
router.post("/" , async (request,response) => {
    let usuario = request.body;
    try{
        let usuario_registrado = await datos.Insert(usuario);
        if(usuario_registrado){
            response.send(construirRespuestaUsuario(usuario_registrado));
        }else{
            response.send(400);
        }
    }catch(e){
        console.log(e)
        response.status(500).send();
    }
    
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
router.get("/:id" , async (request,response) => {
    try {
        let result = await usuarioDatos.FindById(request.params.id);
        if(result){
            response.send(construirRespuestaUsuario(result));
        }else{
            response.send(404);
        }
        
    }catch(e){
        console.log(e)
        response.send(500);
    }
});

// Actualiza un usuario
router.put("/" , (request,response) => {

});

// Crea un usuario
router.delete("/" , (request,response) => {

});

router.post("/login", async (request, response) => {
    try {
        if(request.session.esta_conectado_el_usuario)
        {
            response.status(204).send();
            return; //En este caso necesito el return para que no se ejecute el resto del codigo del request
        }
        let usuario = request.body;
        let usuario_encontrado = await usuarioDatos.BuscarUsuarioPorLogin(usuario.login);
    
        if(usuario_encontrado.pass == request.body.pass){
            request.session.esta_conectado_el_usuario = true;
            response.status(200).json({error: null});
        }else{
            response.status(400).json({error: "No se pudo iniciar sesion"});
        }
    }catch(e){
        console.log(e)
        response.status(500).send();
    }
});

router.post("/logout", (request, response) => {
    request.session.destroy();
    response.send();
})


module.exports = router;