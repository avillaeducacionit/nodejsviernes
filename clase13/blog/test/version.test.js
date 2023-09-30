const request = require("supertest");
const app = require("../app");
const fakerjs = require("@faker-js/faker")
const faker = fakerjs.fakerES;

test("Deberia llamar a version", async() => {
    let response = await request(app).get("/version");
    expect(response.statusCode).toBe(200);
    expect(response.body.version).toBe("0.0.2")
})

test("Deberia llamar a version con mayusculas", async() => {
    let response = await request(app).get("/VERSION");
    expect(response.statusCode).toBe(200);
    expect(response.body.version).toBe("0.0.2")
})

test("Deberia crear una categoria", async() => {
    let categoria = {"nombre": faker.string.sample()}
    console.log(categoria);
    let response = await request(app)
    .post("/api/categorias/")
    .send(categoria)
    
    expect(response.statusCode).toBe(200);
})

