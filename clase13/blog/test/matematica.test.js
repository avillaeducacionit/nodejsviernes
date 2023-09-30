const matematica = require("../src/utils/matematica")
const fakerjs = require("@faker-js/faker")
const faker = fakerjs.fakerES

test("Sumar: Si sumo dos numeros enteros debe devolverme el resultado", () => {
    expect(matematica.sumar(1,2)).toStrictEqual(3);
    expect(matematica.sumar(-1,2)).toStrictEqual(1);
    expect(matematica.sumar(-10,-2)).toStrictEqual(-12);
});

test("Sumar: Pruebas con faker", () => {
    let numeroUno = faker.number.int();
    let numeroDos = faker.number.int();
    let resultado = numeroUno + numeroDos;
    console.log("Testeando la suma de "+numeroUno+" y "+numeroDos + " que tiene que ser igual a "+resultado);
    expect(matematica.sumar(numeroUno, numeroDos)).toStrictEqual(resultado);
});

test("Sumar: Si uno de los parametros es null o undefined debe devolver una excepcion", () => {
    const call = () => {
        matematica.sumar(-10,null);
    }
    expect(call).toThrow(TypeError);
})