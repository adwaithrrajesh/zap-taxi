import { UserController } from "@presentation/controllers/user.controller"; 
import { Request, Response } from "express";

describe("UserController", () => {
  let controller: UserController;
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    controller = new UserController();
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  it("should return LOGIN response", async () => {
    await controller.login(req as Request, res as Response, jest.fn());

    expect(res.json).toHaveBeenCalledWith({ message: "LOGIN" });
  });
});
