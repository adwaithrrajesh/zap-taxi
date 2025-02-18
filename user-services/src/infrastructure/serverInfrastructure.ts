import express, { Application } from "express";
import { Request, Response } from 'express';
import morgan from "morgan";
import cors from "cors";
import fs from "fs";
import path from "path";
import config from "@infrastructure/config/env.config";
import helmet from 'helmet';
import {logger} from '@infrastructure/logger';
import router from "@presentation/routes";
import connectDB from "@infrastructure/orm/mongoose";
import { swaggerSpec } from "./config/swagger.config";
import swaggerUi from 'swagger-ui-express';

export class ServerInfrastructure {
    private app: Application;

    constructor() {
        this.app = express();
    }

    /**
     * @Configures and initializes server middlewares.
     */
    private initializeMiddlewares(): void {
        this.configureMorgan();
        this.app.use(cors({ origin: "*", credentials: true }));
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    /**
     * @morgan Configuration
     */

    private configureMorgan(): void {
        const logFormat = config.NODE_ENV === "production" ? "combined" : "dev";
        this.app.use(morgan(logFormat));
        if (config.NODE_ENV === "production") {
            const logDirectory = path.join(path.resolve(), "logs");
            if (!fs.existsSync(logDirectory)) {
                fs.mkdirSync(logDirectory);
            }
            const logStream = fs.createWriteStream(path.join(logDirectory, "requests.log"), { flags: "a" });
            this.app.use(morgan("combined", { stream: logStream }));
        }
    }

    /**
     * @route - config
     */

    private async routeConfig(): Promise<void>{
        this.app.use('/',router);
    }

    private initializeSwagger(): void {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    private async PING(): Promise<void> {
        this.app.get('/ping', async (req: Request, res: Response): Promise<void> => {
            res.send('USER SERVICE IS ONLINE!!!');
        });
    }


    private startListening(): void {
        const port = config.PORT;
        this.app.listen(port, () => {
            logger.info(`Server listening on port ${port}`);
        }).on("error", (error) => {
            logger.error("Server Error:", error);
            process.exit(1);
        });
    }

    public initializeServer():void {
        connectDB();
        this.initializeMiddlewares();
        this.PING();
        this.routeConfig();
        this.initializeSwagger();
        this.startListening();
    }
}