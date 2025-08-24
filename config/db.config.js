import  mysql2  from "mysql2";
import dotenv from "dotenv";
import { DB, HOST, PASSWORD, USER_NAME } from "./config.js";
dotenv.config({quiet:true});


const connection=mysql2.createConnection({
    host: HOST,
    user: USER_NAME,
    password: PASSWORD,
    database: DB,
    // port:3306
});

export default connection