const app = require("../app");
const storage = require('node-persist');

describe("Data storage", () => {
  beforeEach(async () => {
    const storage = require('node-persist');
    await storage.init( /* options ... */ );
    await storage.setItem('name','yourname')
  });

  test("it should work", async () => {
    expect(await storage.getItem('name')).toEqual("yourname");
  });
});