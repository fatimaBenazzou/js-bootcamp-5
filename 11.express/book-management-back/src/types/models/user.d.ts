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
