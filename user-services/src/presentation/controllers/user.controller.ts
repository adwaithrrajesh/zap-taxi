import { Request, Response, NextFunction } from "express";

export class UserController{

    constructor(){}

    public async login(req: Request, res:Response,next:NextFunction):Promise<void>{
        res.json({message:"LOGIN"});
        return; 
    }
}