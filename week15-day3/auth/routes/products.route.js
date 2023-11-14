import { Router } from "express";
import { _getAllProducts } from "../controllers/products.controller";
import { verifyToken } from "../middlewares/verifyToken";

const products_router = Router();

products_router.get("/", verifyToken, _getAllProducts);

export default products_router;
