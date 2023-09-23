const express = require("express");
const router = express.Router();
const datos = require("./datos/categoriasDatos");

router.get("/",(req,res) => {
    datos.Listar((datos)=> {
        res.json(datos);
    })
});

router.get("/:id", (req,res) => {
    datos.BuscarPorId(req.params.id, (dato) => res.json(dato));
})

router.post("/", (req, res) => {
    datos.Insert(req.body ,(error,datos) => {
        if(error) {
            res.status(404).send(error);
        } else {
            res.send(datos);
        }
    })
})

module.exports = router;