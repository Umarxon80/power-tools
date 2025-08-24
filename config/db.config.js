import  mysql2  from "mysql2";
import dotenv from "dotenv";
dotenv.config({quiet:true});


const connection=mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DB,
    // port:3306
});

export default connection