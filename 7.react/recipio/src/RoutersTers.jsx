import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ProductLayout from "./layouts/ProductLayout";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routers() {
  const isLoggedIn = true;

  return (
    <Routes>
      {/* <Route path="/" Component={Home} /> */}
      <Route
        path="/"
        element={!isLoggedIn ? <Navigate to={"/auth"} /> : <AppLayout />}
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route
        path="/auth"
        element={isLoggedIn ? <Navigate to={"/"} /> : <AuthLayout />}
      >
        <Route index element={<Navigate to={"/auth/login"} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/products" element={<ProductLayout />}>
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
