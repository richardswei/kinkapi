const request = require("supertest");
const app = require("../app");
const Shoot = require("../models/shoot");

describe("Build the model", () => {
  test("It should contain props added", () => {
    // Create an instance of model SomeModel
    var awesome_shoot = new Shoot({ shoot_title: 'awesome', date_last_updated: Date.now() });
    expect(awesome_shoot.shoot_title).toBe('awesome');
  });
});
