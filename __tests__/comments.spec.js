const request = require("supertest");
const app = require("../app");
const dataAccessService = require('../data/data_access_service');

const comment = "I do like it!";
const shoot_payload = {"shoot_title": "woohoo"};
const comment_payload0 = {"shootId": 0, "comment": comment};
const comment_payload1 = {"shootId": 1, "comment": comment};

describe("The API", () => {

  it("Should post a comment successfully if a shoot exists", async () => {
    await dataAccessService.post_shoot(shoot_payload)
    const req = await request(app)
      .post("/api/v1/comments")
      .send(comment_payload0)
    expect(req.body.comment_body).toBe(comment)
    expect(req.statusCode).toBe(201);
  });

  it("Should get a list of comments successfully if it exists", async () => {
    const req = await request(app)
      .get("/api/v1/shoots/0/comments")
    expect(Object.keys(req.body).length).toBe(1)
    expect(req.statusCode).toBe(200)
  });

  it("Should return a 404 on a post if shoots don't exists", async () => {
    const req = await request(app)
      .post("/api/v1/comments")
      .send(comment_payload1)
    expect(req.statusCode).toBe(404);
  });
});
