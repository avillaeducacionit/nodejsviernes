const request = require("supertest");
const app = require("../app");
const chai = require("chai");
const expect = chai.expect;

describe("Api version tests", ()=> {
    describe("API: Llamada a version", () => {
        it("deberia llamar a version", (done) => {
            request(app).get("/version").end((err,response) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body.version).to.equal("0.0.2");
                done();
            });
        })

        it("Deberia crear una categoria", (done) => {
            request(app)
            .post("/api/categorias/")
            .send({"nombre": "Unit test"})
            .end((err,response) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
});
