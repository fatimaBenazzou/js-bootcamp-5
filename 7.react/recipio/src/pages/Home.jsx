import { Link } from "react-router";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
