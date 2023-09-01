const express = require("express");
const router = express.Router();
const moduloCategorias = require("./categorias/categorias");

router.use("/categorias", moduloCategorias);

module.exports = router;