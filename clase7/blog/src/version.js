const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.json({
        "version": "0.0.1"
    })
})

module.exports = router;