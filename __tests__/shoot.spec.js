const request = require("supertest");
const app = require("../app");
const dataAccessService = require('../data/data_access_service');

const shoot = {"shoot_title": 'a_valid_value_goes_here'}

describe("The API", () => {

  it("Should post a shoot successfully", async () => {
    const req = await request(app)
      .post("/api/v1/shoots")
      .send(shoot)
    expect(req.statusCode).toBe(201);
  });

  it("Should post a multiple shoots and get them back", async () => {
    const req = await request(app)
      .post("/api/v1/shoots")
      .send(shoot)
    const req1 = await request(app)
      .post("/api/v1/shoots")
      .send(shoot)
    const req2 = await request(app)
      .post("/api/v1/shoots")
      .send(shoot)
    const req3 = await request(app)
      .get("/api/v1/shoots")
      .send()
    expect(req3.statusCode).toBe(200);
    expect(Object.keys(req3.body).length).toBe(4);
  });

});
