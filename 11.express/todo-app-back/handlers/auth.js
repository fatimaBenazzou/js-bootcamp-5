import { StatusCodes } from "http-status-codes";

import userModel from "../models/users.js";
import jwt from "jsonwebtoken";

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) throw new Error("Wrong email/password");

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) throw new Error("Wrong email/password");

    //
    const userInfo = {
      _id: user._id,
      createdAt: new Date(),
    };

    const token = jwt.sign(userInfo, process.env.AUTH_SECRET);

    user.password = undefined;

    res.status(StatusCodes.OK).json({
      success: true,
      data: user,
      token,
      message: "You have logged in successfully !",
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Unknown Error",
      error: error?.message || error,
    });
  }
}

export async function register(req, res) {
  const user = req.body;

  try {
    const createdUser = await userModel.create(user);

    const userInfo = {
      _id: createdUser._id,
      createdAt: new Date(),
    };

    const token = jwt.sign(userInfo, process.env.AUTH_SECRET);
    createdUser.password = undefined;

    res.status(StatusCodes.CREATED).json({
      success: true,
      data: createdUser,
      token,
      message: "You have registered successfully !",
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Unknown Error",
      error: error?.message || error,
    });
  }
}

export function checkUser(req, res) {
  const user = req.user;
  if (!user) throw new Error("User not Found.");
  res.status(StatusCodes.OK).json({
    success: true,
    data: user,
    message: "User is Authenticated",
  });
}
