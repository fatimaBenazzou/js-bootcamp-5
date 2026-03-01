declare interface AuthenticatedRequest extends Request {
  user: IUserDocument;
}
declare interface RequestWithParsedQuery<T = unknown> extends Request {
  parsedQuery: T;
}

declare interface FilterQuery {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: 1 | -1;
  search?: string;
  category?: string;
}
