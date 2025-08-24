import express from "express";
import dotenv from "dotenv";
// import test from "./routes/test.js"
dotenv.config({quiet:true});
const PORT = process.env.PORT ?? 4000;

const app = express();

app.use(express.json());
// app.use("/api",test)

app.listen(PORT, () => {
  console.log(`server started on: http://localhost:${PORT}`);
});
