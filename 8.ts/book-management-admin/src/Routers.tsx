import { Navigate, Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Authors from "./pages/Authors";
import AuthorDetails from "./pages/AuthorDetails";
import Borrowings from "./pages/Borrowings";
import BorrowingDetails from "./pages/BorrowingDetails";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import Unauthorized from "./pages/Unauthorized";
import useAuth from "./hooks/useAuth";

export default function Routers() {
  const { isAdmin, isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Auth */}
      <Route
        path="/auth"
        element={
          isAuthenticated ? <Navigate to={"/"} replace /> : <AuthLayout />
        }
      >
        <Route index element={<Navigate to={"/auth/login"} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
      </Route>

      {/* Admin  */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            isAdmin ? (
              <RootLayout />
            ) : (
              <Navigate to={"/unauthorized"} />
            )
          ) : (
            <Navigate to={"/auth"} />
          )
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="authors" element={<Authors />} />
        <Route path="authors/:id" element={<AuthorDetails />} />
        <Route path="borrowings" element={<Borrowings />} />
        <Route path="borrowings/:id" element={<BorrowingDetails />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetails />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:id" element={<CategoryDetails />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* control */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
