import { Router } from 'express';
import { UserController } from '@presentation/controllers/user.controller';


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Invalid credentials
 */

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