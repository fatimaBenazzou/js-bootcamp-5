import type { BaseDocument } from "../common.js";

export interface IAuthor extends BaseDocument {
  /** Author's name */
  name: string;
  /** Author's biography (optional) */
  bio?: string;
}
