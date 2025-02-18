import request from "supertest";
import express from "express";
import { AuthRoutes } from "@presentation/routes/auth/auth.routes";

const app = express();
app.use(express.json());
app.use("/auth", new AuthRoutes().router);

describe("Auth Routes", () => {
  it("should return LOGIN on /login", async () => {
    const response = await request(app).post("/auth/login");
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "LOGIN" });
  });
});
