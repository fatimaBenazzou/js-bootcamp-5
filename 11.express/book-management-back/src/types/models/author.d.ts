declare interface IAuthor extends BaseDocument {
  /** Author's name */
  name: string;
  /** Author's biography (optional) */
  bio?: string;
}
