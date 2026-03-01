import { Request, Response } from "express";
import userModel from "../models/user.js";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import type { AuthenticatedRequest } from "../types/express.js";

interface JwtPayload {
  _id: string;
  createdAt: Date;
}
export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body as { email: string; password: string };

  try {
    const user = await userModel.findOne({ email });
    if (!user) throw new Error("Wrong email/password");

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) throw new Error("Wrong email/password");

    const userInfo: JwtPayload = {
      _id: user._id.toString(),
      createdAt: new Date(),
    };

    const token = jwt.sign(userInfo, process.env.AUTH_SECRET as string);

    const userObject = user.toObject();
    const { password: _psw, ...safeUser } = userObject;

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "You have logged in !",
      data: safeUser,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to login !",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function register(req: Request, res: Response): Promise<void> {
  const user = req.body;
  try {
    const createdUser = await userModel.create(user);

    const userInfo: JwtPayload = {
      _id: createdUser._id.toString(),
      createdAt: new Date(),
    };

    const token = jwt.sign(userInfo, process.env.AUTH_SECRET as string);

    const userObject = createdUser.toObject();
    const { password: _psw, ...safeUser } = userObject;

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "You have registered !",
      data: safeUser,
      token,
    });
  } catch (err) {
    const error = err as Error & { code?: number };

    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid user validation",
        error: error.message,
      });
    }
  }
}

export async function checkUser(req: Request, res: Response): Promise<void> {
  const authReq = req as AuthenticatedRequest;
  const user = authReq.user;

  if (!user) {
    res.status(401).json({
      success: false,
      message: "User not found",
    });
    return;
  }

  res.json({
    success: true,
    message: "User is authenticated",
    data: user,
  });
}
