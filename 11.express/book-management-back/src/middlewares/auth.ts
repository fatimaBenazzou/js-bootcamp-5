import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.js";
import type { AuthenticatedRequest } from "../types/index.js";

interface JwtPayload {
  _id: string;
  createdAt: string;
}

export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({
        success: false,
        message: "Authorization header missing",
      });
      return;
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      res.status(401).json({
        success: false,
        message: "Token doesn't exist",
      });
      return;
    }

    // Verify token
    const verified = jwt.verify(
      token,
      process.env.AUTH_SECRET as string,
    ) as JwtPayload;

    if (!verified) {
      res.status(401).json({
        success: false,
        message: "Unverified token used",
      });
      return;
    }

    // Find user and attach to request
    const user = await userModel.findById(verified._id).select("-password");
    if (!user) {
      res.status(401).json({
        success: false,
        message: "User not found or deleted",
      });
      return;
    }

    (req as AuthenticatedRequest).user = user;
  } catch (error) {}
}
