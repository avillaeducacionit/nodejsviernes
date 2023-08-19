const fs = require("fs");

const ObtenerTodos = (callback) => {
    fs.readFile(__dirname + "../../../data/articulos.json",'utf-8',(err,datos) => {
        if(err){
            console.log(err);
            callback([]);
        }else{
            callback(JSON.parse(datos));
        }
    });
}

module.exports = {
    ObtenerTodos
}

/*
{
    ObtenerTodos: ()=> {
        return [];
    }
}

*/