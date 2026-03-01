declare interface IRating extends BaseDocument {
  /** Reference to the user who rated */
  ratedBy: Types.ObjectId;
  /** Reference to the book being rated */
  bookId: Types.ObjectId;
  /** Rating value (1-5) */
  rating: number;
}
