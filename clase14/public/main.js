let socket = io.connect();

const canvas = document.querySelector("canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
const colours =  [ "#2ecc71","#3498db","#e74c3c","#9b59b6","#f39c12","#ecf0f1"];
const thisColour = colours[Math.floor(Math.random() * (colours.length - 1 + 1))];
ctx.fillStyle = thisColour;
let isMouseDown = false;

function Coords(x,y) {
    this.x = x;
    this.y = y;
}

canvas.addEventListener("mousedown", () => {
    isMouseDown = true; 
    console.log("Is mouse down");
});
canvas.addEventListener("mouseup", () => {
    isMouseDown = false;
    console.log("Is mouse up");
});

canvas.addEventListener("mousemove", e => {
    if(isMouseDown){
        ctx.fillRect(e.offsetX, e.offsetY, 5,5);
        let coord = new Coords(e.offsetX, e.offsetY);
        
        console.log("Enviando al server " + JSON.stringify(coord));
        socket.emit('dibujando', coord);
    }
});

socket.on("dibujando", (dato) => {
    ctx.fillRect(dato.x, dato.y, 5, 5);
})