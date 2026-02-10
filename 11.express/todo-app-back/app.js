import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.js";
import todoRouter from "./routes/todos.js";

const app = express();

app.set("trust proxy", true);

app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: new RegExp(process.env.FRONTEND_ORIGIN || "http://localhost:5173"),
  }),
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth", authRouter);
app.use("/todos", todoRouter);

export default app;
