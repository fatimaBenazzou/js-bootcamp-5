declare interface BaseDocument {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

declare type UserRole = "admin" | "user";

declare type BookStatus = "in-shelf" | "out-of-stock";
