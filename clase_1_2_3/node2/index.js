var contador = 123;

var referencia = setInterval(function (){
    contador++;
    var objeto = { 
        contador: contador,
        fyh: new Date().toLocaleString()
    };
    console.log(objeto);
    if(contador == 130){
        console.log(noexite.algo);
    }
},2000)

setTimeout(function() {
    clearInterval(referencia);
},60000)

process.on('exit',function() {
    console.log('Chau!!!');
})

process.on('uncaughtException', function(){
    console.log("ERROR");
})