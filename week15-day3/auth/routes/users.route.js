import { register } from "../controllers/users.controller.js";
import { Router } from "express";

const users_router = Router();

users_router.post("/register", register);

export default users_router;
