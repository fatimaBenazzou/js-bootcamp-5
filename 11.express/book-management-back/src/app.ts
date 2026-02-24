import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRouter from "./routers/auth.js";
import cors from "cors";
import { StatusCodes } from "http-status-codes";

const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_DOMAIN || "http://localhost:5173",
    credentials: true,
  }),
);

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// API Routes
app.use("/auth", authRouter);

// Health check
app.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler - must be after all routes
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Global error handler
// Error handling
app.use(errorHandler);

export default app;
