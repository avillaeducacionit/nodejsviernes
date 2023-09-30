const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/", async (request, response) => {

    let usuarios = await axios.get("https://jsonplaceholder.typicode.com/users");
    response.send(usuarios.data);
})


module.exports = router;