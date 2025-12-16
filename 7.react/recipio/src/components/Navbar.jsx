import { NavLink } from "react-router";
import "./Navbar.css";

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/recipes",
    label: "Recipes",
  },
  {
    link: "/products",
    label: "Products",
  },
];
export default function Navbar() {
  return (
    <nav>
      {links.map((link, i) => (
        <NavLink
          key={link.label + i}
          to={link.link}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {link.label}
        </NavLink>
      ))}
      {/* <NavLink to="/about">About</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/products">Products</NavLink> */}
    </nav>
  );
}
