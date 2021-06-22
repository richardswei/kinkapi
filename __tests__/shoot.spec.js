const request = require("supertest");
const app = require("../app");

describe("The API", () => {
  test("Should post a shoot successfully", done => {
    request(app)
      .post("/api/v1/shoots")
      .set({"shoot_title": 'a_valid_value_goes_here'})
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
