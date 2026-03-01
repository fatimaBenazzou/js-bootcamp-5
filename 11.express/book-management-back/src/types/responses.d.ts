import { Types } from "mongoose";
import { Request } from "express";

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
