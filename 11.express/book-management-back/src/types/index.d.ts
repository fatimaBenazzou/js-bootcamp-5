import { Types } from "mongoose";
import { Request } from "express";
declare interface BaseDocument {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

declare type UserRole = "admin" | "user";

declare interface IUser extends BaseDocument {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
}

declare interface IUserDocument extends IUser {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

declare interface AuthenticatedRequest extends Request {
  user: IUserDocument;
}
declare interface RequestWithParsedQuery<T = unknown> extends Request {
  parsedQuery: T;
}

declare interface ApiSuccessResponse<T = unknown> {
  success: true;
  message: string;
  data: T;
}

declare interface ApiErrorResponse {
  success: false;
  message: string;
  error?: string | string[] | Record<string, unknown>;
}

declare interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

declare interface ApiPaginatedResponse<T = unknown> {
  success: true;
  message: string;
  data: T[];
  pagination: PaginationMeta;
}
