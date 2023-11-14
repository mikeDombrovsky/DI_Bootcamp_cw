import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import users_router from "./routes/users.route.js";
import products_router from "./routes/products.route.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(cookieParser());

app.use("/users", users_router);
app.use("/products", products_router);

app.listen(process.env.PORT, (err) =>
  console.log(err ? err : `run on ${process.env.PORT}`)
);
