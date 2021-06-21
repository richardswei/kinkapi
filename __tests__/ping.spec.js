const request = require("supertest");
const app = require("../app");

describe("Test the ping", () => {
  test("It should respond 200 with message ok", done => {
    request(app)
      .get("/ping")
      .then(response => {
        expect(response.statusCode).toBe(200);
        console.log(response)
        expect(response.text).toBe("OK");
        done();
      });
  });
});