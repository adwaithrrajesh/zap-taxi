import express, { Application } from "express";
import proxy from 'express-http-proxy';
import config from "../config";


const routesConfig: { [route: string]: string } = {
    '/api/user': config.USER_SERVICE_URL,
};

export class RouteConfig {

    /**
     * @param app :(express APPLICATION)
     */
    public async config(app: Application): Promise<void> {
        Object.entries(routesConfig).forEach(([route, serviceUrl]) => {
            console.log(route,serviceUrl);
            app.use(route, proxy(serviceUrl));
        });
    }
}