const request = require("supertest");
const app = require("../server.js");

describe("trash routes", () => {
  it("should get all deleted groups", async () => {
    const res = await request(app).get("/api/trash");
    expect(res.statusCode).toEqual(200);
  });
});
