declare interface UserBooks {
  borrowed: Types.ObjectId[];
  read: Types.ObjectId[];
  favorites: Types.ObjectId[];
}

interface BookPrice {
  original?: number;
  current: number;
}

declare interface IBook {
  /** Book title */
  title: string;
  /** Reference to the author document */
  author: Types.ObjectId;
  /** Unique serial number (format: BK-XXXXX) */
  serialNumber: string;
  /** Book pricing information */
  price: BookPrice;
  /** Price for borrowing the book */
  rentalPrice: number;
  /** Daily late fee for overdue returns */
  lateFeePerDay: number;
  /** Total copies in the library */
  totalStock: number;
  /** Currently available copies */
  availableStock: number;
  /** Book availability status */
  status: BookStatus;
  /** Book description */
  description: string;
  /** Cover image URL (optional) */
  cover?: string;
  /** Search keywords (optional) */
  keywords?: string[];
  /** Reference to category document (optional) */
  category?: Types.ObjectId;
  books: UserBooks;
}
