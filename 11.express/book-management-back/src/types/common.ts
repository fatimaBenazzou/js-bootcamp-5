import { Types } from "mongoose";

export interface BaseDocument {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = "admin" | "user";

export type BookStatus = "in-shelf" | "out-of-stock";
