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

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserI | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === "admin";

  const AUTH_TOKEN_KEY = "token";
  const AUTH_USER_KEY = "user";

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
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
