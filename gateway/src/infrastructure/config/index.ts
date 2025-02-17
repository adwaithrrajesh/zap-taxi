import dotenv from 'dotenv';

dotenv.config();

export default{
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    USER_SERVICE_URL:'http://localhost:8001/'
};