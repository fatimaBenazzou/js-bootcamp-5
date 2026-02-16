import { useQuery } from "@tanstack/react-query";
import React from "react";
import { checkAuth } from "../api/endpoints/auth";
import useAuth from "../hooks/useAuth";

export default function LoggedInProvider({ children }) {
  const { login, logout } = useAuth();

  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const user = await checkAuth();
        if (!user.success) throw new Error("Authentication failed");
        login(user.data);
        return user.data;
      } catch (error) {
        logout();
        throw error;
      }
    },
  });
  return <>{children}</>;
}
