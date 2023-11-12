import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import users_router from "./routes/users.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", users_router);

app.listen(process.env.PORT, (err) =>
  console.log(err ? err : `run on ${process.env.PORT}`)
);
