const express = require("express");
const router = express.Router();

const usersModule = require("./api/users/users")

router.use("/users", usersModule);

module.exports = router;