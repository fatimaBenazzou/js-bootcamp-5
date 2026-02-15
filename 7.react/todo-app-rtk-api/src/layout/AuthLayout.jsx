import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main>
      <header>auth</header>
      <Outlet />
    </main>
  );
}
