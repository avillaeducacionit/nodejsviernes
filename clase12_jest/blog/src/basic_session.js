const express = require("express");
const router = express.Router();

router.get("/", (request,response)=> {
    console.log(request.session);
    if(request.session.contador == 0){
        request.session.contador = 0;
    } else {
        let contador = request.session.contador;
        contador++;
        request.session.contador = contador;
    }

    response.send("SESSION. Contador: "+request.session.contador);
});

module.exports = router;