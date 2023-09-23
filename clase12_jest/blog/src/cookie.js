const express = require("express");
const router = express.Router();
const cookie = require("cookie");

router.get("/", (request,response)=> {
    let cookies = cookie.parse(request.headers.cookie || '');
    if(cookies.user){
        response.redirect("/cookies/bienvenido");
    }else{
        response.send(`
        <html>
            <body>
                <form method="POST">
                    Su nombre: <br>
                    <input type="text" name="nombre" />
                    <input type="submit" />
                </form>
            </body>
        </html>
        `);
    }
});

router.post("/", (request, response) => {
    response.setHeader("Set-Cookie", 
    [
        cookie.serialize("user", request.body.nombre, { maxAge: 3600})
    ]
    );

    response.redirect("/cookies/bienvenido");
});

router.get("/bienvenido", (request, response) => {
    let cookies = cookie.parse(request.headers.cookie || '');
    if(cookies.user){
        response.send("Bienvenido " + cookies.user);
    }else{
        response.redirect("/cookies")
    }
    
})

router.get("/ejemplo", (request,response) => {
    
    let cookies = cookie.parse(request.headers.cookie || '');

    response.setHeader("Set-Cookie", 
    [
        cookie.serialize("site", "Node JS Viernes", { maxAge: 60}),
        cookie.serialize("first_time", false, { maxAge: 60}),
        cookie.serialize("ultimo_acceso", new Date(), { maxAge: 60 })
    ]
    );

    if(cookies.first_time == 'false'){
        response.send("Cookie! Ultimo acceso: "+cookies.ultimo_acceso);
    }else{
        response.send("Cookie! Primera vez que ingresa");
    }
});

module.exports = router;