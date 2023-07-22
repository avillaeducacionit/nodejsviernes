const express = require('express');
const app = express();

app.use(express.static("static"));
app.use("/images", express.static("images"));

app.listen(88, function() {
    console.log("Termino de levantar");
});
