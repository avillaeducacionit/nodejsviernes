const request = require("supertest");
const app = require("../app");

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
    let response = await request(app)
    .post("/api/categorias/")
    .send({"nombre": "Unit test"})
    
    expect(response.statusCode).toBe(200);
})

