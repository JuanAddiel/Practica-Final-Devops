const request = require("supertest");
const app = require("./app");

describe("Test de la aplicación web", () => {
  it("Debería devolver el contenido HTML esperado", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("<h1>Hello World!</h1>");
    expect(response.text).toContain("<h4>La practica final de devops</h4>");
  });
   afterAll((done) => {
     app.close(()=>{
        done();
     });
   });
});
