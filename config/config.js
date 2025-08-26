import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const PORT =process.env.PORT ?? 5000;
export const HOST = process.env.HOST;
export const DB = process.env.DB;
export const PASSWORD= process.env.PASSWORD;
export const JWTSECRET = process.env.JWTSECRET;
export const USER_NAME = process.env.USER_NAME;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const EMAIL_USER = process.env.EMAIL_USER;
