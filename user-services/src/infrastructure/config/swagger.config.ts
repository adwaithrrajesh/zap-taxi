import swaggerJsDoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Service API',
            version: '1.0.0',
            description: 'API documentation for User Service',
        },
        servers: [
            {
                url: 'http://localhost:8001',
                description: 'Local server',
            },
        ],
    },
    apis: [
        'src/presentation/routes/**/*.ts',
        'src/presentation/controllers/**/*.ts'
    ],
};

export const swaggerSpec = swaggerJsDoc(options);
