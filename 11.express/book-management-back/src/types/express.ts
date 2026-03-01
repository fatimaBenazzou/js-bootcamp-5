import { Request } from "express";
import type { IUserDocument } from "./models/user.js";

export interface AuthenticatedRequest extends Request {
  user: IUserDocument;
}
export interface RequestWithParsedQuery<T = unknown> extends Request {
  parsedQuery: T;
}

export interface FilterQuery {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: 1 | -1;
  search?: string;
  category?: string;
}
