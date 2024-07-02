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

  // Update
  it("should update a group", async () => {
    const res = await request(app)
      .post("/api/groups")
      .send({ name: "Test Group" });
    const updateRes = await request(app)
      .patch(`/api/groups/${res.body._id}`)
      .send({ name: "Updated Group" });
    expect(updateRes.statusCode).toEqual(200);
    expect(updateRes.body).toHaveProperty("name", "Updated Group");
  });

  // Delete
  it("should delete a group", async () => {
    const res = await request(app)
      .post("/api/groups")
      .send({ name: "Test Group" });
    const deleteRes = await request(app).delete(`/api/groups/${res.body._id}`);
    expect(deleteRes.statusCode).toEqual(204);
  });
});
