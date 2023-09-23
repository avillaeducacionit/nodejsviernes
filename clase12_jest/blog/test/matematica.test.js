const matematica = require("../src/utils/matematica")

test("Sumar: Si sumo dos numeros enteros debe devolverme el resultado", () => {
    expect(matematica.sumar(1,2)).toStrictEqual(3);
    expect(matematica.sumar(-1,2)).toStrictEqual(1);
    expect(matematica.sumar(-10,-2)).toStrictEqual(-12);
});

test("Sumar: Si uno de los parametros es null o undefined debe devolver una excepcion", () => {
    const call = () => {
        matematica.sumar(-10,null);
    }
    expect(call).toThrow(TypeError);
})