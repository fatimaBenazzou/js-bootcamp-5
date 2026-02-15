import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../app/slices/auth";

export default function useAuth() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const loginFunction = useCallback(() => {
    (userData) => dispatch(login(userData));
  }, [dispatch]);

  const logoutFunction = useCallback(() => {
    () => {
      dispatch(logout());
      localStorage.removeItem("token");
    };
  }, [dispatch]);

  return {
    user,
    isAuthenticated,
    login: loginFunction,
    logout: logoutFunction,
  };
}
