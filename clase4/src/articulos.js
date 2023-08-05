const fs = require("fs");
const path = require("path");

const buscarTodos = () => {
    const ubicacionArchivo = path.join(__dirname, "..", "articulos.json")
    
    console.log(ubicacionArchivo);

    const datos = fs.readFileSync(ubicacionArchivo, { encoding: "utf-8" });

    const resultado = JSON.parse(datos);

    return resultado;
}

const buscarUno = (id) => buscarTodos().find((item) => item.id === id);

const agregar = (nuevo) => {
    let todos = buscarTodos();
    nuevo.id = nuevoId(todos);
    nuevo.createdAt = new Date();
    todos.push(nuevo);
    fs.writeFileSync("articulos.json", JSON.stringify(todos));
    return nuevo;
};

const nuevoId = (articulos) => {
    let id = 0;
    for (let i = 0; i < articulos.length; i++){
        let articulo = articulos[i];
        let articuloId = articulo.id;
        let articuloIdInt = parseInt(articuloId);
        if(articuloIdInt > id){
            id = articuloIdInt;
        }
    }
    id++;

    return id.toString(); 
}

module.exports = {
    Todos: buscarTodos,
    Uno: buscarUno,
    Agregar: agregar
}