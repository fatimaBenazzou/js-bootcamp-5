import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoPage from "./pages/TodoPage";
import NotFound from "./pages/NotFound";
import AuthLayout from "./layout/AuthLayout";
import useAuth from "./hooks/useAuth";

export default function Routers() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* auth */}
      <Route
        path="/auth"
        element={isAuthenticated ? <Navigate to={"/"} /> : <AuthLayout />}
      >
        <Route index element={<Navigate to={"/auth/login"} replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* app */}
      <Route
        path="/"
        element={isAuthenticated ? <TodoPage /> : <Navigate to={"/auth"} />}
      />

      {/* not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
