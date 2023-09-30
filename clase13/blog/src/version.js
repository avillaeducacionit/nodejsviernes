const express = require("express");
const router = express.Router();
const fakerjs = require("@faker-js/faker");

faker = fakerjs.fakerES

router.get("/",(req,res) => {
    res.json({
        "version": "0.0.2",
        "aleatorio": faker.person.fullName(),
    })
})

module.exports = router;