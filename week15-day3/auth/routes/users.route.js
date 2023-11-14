import { register, login } from "../controllers/users.controller.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";

const users_router = Router();

users_router.post("/register", register);
users_router.post("/login", login);
users_router.get("/verify", verifyToken, (req, res) =>{
    res.sendStatus(200);
} );

export default users_router;
