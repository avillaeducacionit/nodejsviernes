const mongoose = require("mongoose");

const categorias = mongoose.model("Categoria", {
    nombre: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 15
    },
});

module.exports = categorias;