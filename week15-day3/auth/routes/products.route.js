import { Router } from "express";
import { _getAllProducts } from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const products_router = Router();

products_router.get("/", verifyToken, _getAllProducts);

export default products_router;
