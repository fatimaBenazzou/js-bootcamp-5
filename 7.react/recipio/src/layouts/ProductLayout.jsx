import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export default function ProductLayout() {
  return (
    <div>
      <Navbar />
      <h2>Products</h2>
      <Outlet />
      <footer>Copyright GMC - 2025</footer>
    </div>
  );
}
