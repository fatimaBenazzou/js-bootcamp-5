import { AuthContext } from "@/contexts/Authcontext";
import { useContext } from "react";

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Auth Constext must be ......");
  }
  return context;
}
