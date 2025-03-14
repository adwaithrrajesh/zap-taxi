import dotenv from 'dotenv';

dotenv.config();

export default{
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    MONGO_URI:process.env.MONGO_URI||''
};