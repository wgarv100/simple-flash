const request = require("supertest");
const app = require("../server.js");

describe("Group Routes", () => {
  // Create
  it("should create a new group", async () => {
    const res = await request(app)
      .post("/api/groups")
      .send({ name: "Test Group" });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("name", "Test Group");
  });

  // Read
  it("should get all groups", async () => {
    const res = await request(app).get("/api/groups");
    expect(res.statusCode).toEqual(200);
  });
});
