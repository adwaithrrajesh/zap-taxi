import { Router } from "express";
import { AuthRoutes } from "./auth/auth.routes";

const router = Router();
const authRouter = new AuthRoutes().router;

router.use('/auth',authRouter)

export default router