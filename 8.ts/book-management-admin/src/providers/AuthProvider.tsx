import { AuthContext } from "@/contexts/Authcontext";
import React, { useState } from "react";

// Mock users for authentication
const mockAuthUsers = [
  {
    id: "auth_admin_001",
    email: "admin@library.com",
    password: "Admin123",
    name: "Admin User",
    role: "admin" as AuthRole,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
  },
  {
    id: "auth_librarian_001",
    email: "librarian@library.com",
    password: "Librarian123",
    name: "Librarian User",
    role: "user" as AuthRole,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Librarian",
  },
];

const AUTH_TOKEN_KEY = "token";
const AUTH_USER_KEY = "user";

function getStoredAuth(): { user: UserI | null; token: string | null } {
  if (typeof window === "undefined") {
    return { user: null, token: null };
  }

  // Check sessionStorage first, then localStorage
  let storedToken = sessionStorage.getItem(AUTH_TOKEN_KEY);
  let storedUser = sessionStorage.getItem(AUTH_USER_KEY);
  let storage: Storage = sessionStorage;

  if (!storedToken || !storedUser) {
    storedToken = localStorage.getItem(AUTH_TOKEN_KEY);
    storedUser = localStorage.getItem(AUTH_USER_KEY);
    storage = localStorage;
  }

  if (storedToken && storedUser) {
    try {
      const user = JSON.parse(storedUser) as UserI;
      return { user, token: storedToken };
    } catch {
      storage.removeItem(AUTH_TOKEN_KEY);
      storage.removeItem(AUTH_USER_KEY);
    }
  }

  return { user: null, token: null };
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserI | null>(() => getStoredAuth().user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === "admin";

  const login = (credentials: LoginCredentialsI) => {
    setIsLoading(true);

    const foundUser = mockAuthUsers.find(
      (user) =>
        user.email.toLowerCase().trim() ===
          credentials.email.toLowerCase().trim() &&
        user.password === credentials.password
    );

    if (foundUser) {
      const authUser: UserI = {
        id: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
        name: foundUser.name,
        avatar: foundUser.avatar,
      };

      const token = `mock_token_${Date.now()}_${foundUser.id}`;

      const storage = credentials.rememberMe ? localStorage : sessionStorage;
      storage.setItem(AUTH_TOKEN_KEY, token);
      storage.setItem(AUTH_USER_KEY, JSON.stringify(authUser));

      setUser(authUser);
      setIsLoading(false);
      return true;
    }

    setError("Invalid email or password");
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
    setUser(null);
    setError(null);
  };

  const clearAuthError = () => {
    setError(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAdmin,
        isAuthenticated,
        error,
        login,
        logout,
        clearAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
