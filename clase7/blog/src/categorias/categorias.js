const express = require("express");
const router = express.Router();
const datos = require("./datos/categoriasDatos");

router.get("/",(req,res) => {
    res.json([
        {
            id: 1,
            nombre: "Noticias"
        }
    ])
});

router.post("/", (req, res) => {
    datos.Insert(req.body,() => {
        res.send("OK");
    })
})

module.exports = router;