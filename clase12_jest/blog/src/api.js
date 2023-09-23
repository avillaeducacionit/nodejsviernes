const express = require("express");
const router = express.Router();
const moduloCategorias = require("./categorias/categorias");
const moduloUsuario = require("./usuario/usuario")

router.use("/categorias", moduloCategorias);
router.use("/user", moduloUsuario);

module.exports = router;