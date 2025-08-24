import express from "express";
import dotenv from "dotenv";
import index from "./routes/index.js"
dotenv.config({quiet:true});
const PORT = process.env.PORT ?? 4000;

const app = express();

app.use(express.json());
app.use("/api",index)

app.listen(PORT, () => {
  console.log(`server started on: http://localhost:${PORT}`);
});
