const express = require("express");
const app = express();
const articulos = require("./src/articulos")
const bodyParser = require("body-parser");
const Joi = require('joi');

app.use(bodyParser.json());
// O solamente app.use(express.json());

app.get("/api/version", (req, res) => {
    let version = {
        number: "0.0.1",
        name: "Mi Primer API REST"
    };
    res.json(version);
});

app.get("/api/articulos", (req,res)=> {
    res.json(articulos.Todos());
})

app.get("/api/articulos/:identificador", (req,res) => {
    res.json(articulos.Uno(req.params.identificador));
});

app.post("/api/articulos", (req, res) => {
    let articulo = req.body;

    const estructuraArticulo = Joi.object().keys({
        name: Joi.string().trim().required().min(4),
        price: Joi.string().trim().required().min(1)
    });

    const { error, value } = estructuraArticulo.validate(articulo, {
        stripUnknown: true
    });
    if (error) {
        res.status(400).json({
            message: "Error al guardar el articulo",
            err: error
        });
    } else {
        let nuevoArticulo = articulos.Agregar(value); // Esto deberia agregar al archivo articulos.json
        res.json(nuevoArticulo);
    }
});

// CRUD
// CREATE
// READ (Esto estaria)
// UPDATE
// DELETE


app.listen(8080);