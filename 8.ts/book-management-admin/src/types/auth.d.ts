declare type AuthRole = "admin" | "user";

declare interface UserI {
  id: string;
  email: string;
  name: string;
  role: AuthRole;
  avatar?: string;
}

declare interface LoginCredentialsI {
  email: string;
  password: string;
  rememberMe?: boolean;
}

declare interface AuthContextI {
  user: UserI | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentialsI) => boolean;
  logout: () => void;
  clearAuthError: () => void;
}
