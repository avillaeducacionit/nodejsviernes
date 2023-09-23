const chai = require("chai");
const expect = chai.expect;
const matematica = require("../src/utils/matematica")

describe("Matematica tests", ()=> {
    it("deberia sumar 1 + 2", (done) => {
        expect(matematica.sumar(1,2)).to.equal(3)
        done()
    })

    it("deberia sumar -1 + 2", (done) => {
        expect(matematica.sumar(-1,2)).to.equal(1)
        done()
    })

    it("deberia sumar -10 + 2", (done) => {
        expect(matematica.sumar(-10,2)).to.equal(-8)
        done()
    })

    it("deberia sumar -10 + -2", (done) => {
        expect(matematica.sumar(-10,-2)).to.equal(-12)
        done()
    })
})

