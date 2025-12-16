import React from "react";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <h2>Auth</h2>
      <Outlet />
    </div>
  );
}
