import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import app from "./app";
import { resetUsers } from "./db/inMemoryDb";

describe("backend endpoints", () => {
  beforeEach(() => {
    resetUsers();
  });

  it("returns health status", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("returns one random user", async () => {
    const response = await request(app).get("/api/users/random");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
  });

  it("updates user details", async () => {
    const response = await request(app).put("/api/users/1").send({ city: "Mumbai", role: "viewer" });
    expect(response.status).toBe(200);
    expect(response.body.city).toBe("Mumbai");
    expect(response.body.role).toBe("viewer");
  });
});

