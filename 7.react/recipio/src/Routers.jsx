import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/" Component={Home} /> */}
    </Routes>
  );
}
