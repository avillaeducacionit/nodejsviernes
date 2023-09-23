const mongoose = require("mongoose");

const usuarios = mongoose.model("Usuario", {
    login: {
        type:  String,
        required: true
    },
    pass: {
        type:  String,
        required: true
    }
});

module.exports = usuarios;