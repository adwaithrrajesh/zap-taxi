import { Router } from 'express';
import { UserController } from '@presentation/controllers/user.controller';


export class AuthRoutes {
    router: Router;
    private controller: UserController;

    constructor() {
        this.router = Router();
        this.controller = new UserController();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/login',this.controller.login.bind(this.controller));
    }
}