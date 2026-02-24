import { Router } from "express";
import { checkUser, login, register } from "../handlers/auth.js";
import { checkAuth } from "../middlewares/auth.js";
import { validateBodySchema } from "../middlewares/validations.js";
import { loginSchema, userSchema } from "../validation/user.js";

const authRouter = Router();

authRouter.post("/login", validateBodySchema(loginSchema), login);
authRouter.post("/register", validateBodySchema(userSchema), register);
authRouter.get("/check", checkAuth, checkUser);

export default authRouter;
