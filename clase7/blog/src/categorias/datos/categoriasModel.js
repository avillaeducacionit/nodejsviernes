const mongoose = require("mongoose");

const categorias = mongoose.model("Categoria", {
    id: Number,
    nombre: String,
});

module.exports = categorias;