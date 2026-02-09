import { Router } from "express";
import { checkUser, login, register } from "../handlers/auth.js";
import { checkAuth } from "../middlewares/auth.js";

const authRouter = Router();

authRouter.get("/", checkAuth, checkUser);
authRouter.post("/login", login);
authRouter.post("/register", register);

export default authRouter;
