import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Error handling
app.use(errorHandler);

export default app;
