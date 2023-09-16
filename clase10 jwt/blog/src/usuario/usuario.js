const express = require("express");
const router = express.Router();
const datos = require("./datos/usuarioDatos");
const usuarioDatos = require("./datos/usuarioDatos");
const md5 = require("crypto-js/md5")

const jwt = require("jsonwebtoken")
const config = require("./../config")

// objeto usaurio: { login: "andresv", pass: "1231", id: objectid }

// Crea un usuario
router.post("/" , async (request,response) => {
    let usuario = request.body;
    try{
        usuario.pass = md5(usuario.pass);
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

const construirRespuestaUsuario = (userDB) => {
    return {
        login: userDB.login,
        id: userDB._id
    }
}

// Busca usuarios
router.get("/" , (request,response) => {

});

// Busca usuarios
router.get("/:id" , async (request,response) => {

    let token = request.query.token;

    jwt.verify(token, config.key, (err, decoded)=> {

    });

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
        let usuario = request.body;
        let usuario_encontrado = await usuarioDatos.BuscarUsuarioPorLogin(usuario.login);
    
        if(usuario_encontrado.pass == md5(request.body.pass)) {
            
            const payload = {
                user: usuario_encontrado.user
            }

            const jwtConfig = {
                expiresIn: 60
            }

            const token = jwt.sign(payload, config.key, jwtConfig  );

            response.status(200).json({token: token});
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