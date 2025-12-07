import { useState } from "react";

const navigation = [
  {
    title: "Features",
    url: "#features",
  },
  {
    title: "Pricing",
    url: "#pricing",
  },
  {
    title: "How to use",
    url: "#how-to-use",
  },
  {
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-border transition-all ${
        openNavigation
          ? "bg-bg shadow-lg"
          : "bg-bg/90 backdrop-blur-sm hover:bg-bg/95"
      }`}
    >
      <nav className="flex items-center  px-5 lg:px-8 xl:px-10 max-lg:py-4">
        {/* logo */}
        <a
          href="#hero"
          className="block w-48 xl:mr-8 hover:scale-105 transition-transform "
        >
          <img
            src="/brainwave.svg"
            alt=""
            className="hover:opacity-80 transition-opacity duration-300 "
          />
        </a>

        {/* links */}
        <div
          className={`fixed top-20 left-0 bg-bg lg:static lg:flex lg:mx-auto lg:bg-transparent ${
            openNavigation ? "flex" : "hidden"
          }`}
        >
          <ul className="flex-col lg:flex-row flex items-center justify-center m-auto gap-15">
            {navigation.map((item, index) => (
              <li key={"nav-" + index}>
                <a
                  href={item.url}
                  className={`block font-code text-2xl uppercase text-neutral hover:text-accent-lavender px-6 py-6 md:py-8 lg:-mr-px lg:text-xs lg:font-semibold ${
                    item.onlyMobile ? "lg:hidden" : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* actions */}
        <a href="/" className="hidden lg:block hover:text-neutral mr-8">
          New account
        </a>
        <button className="hidden lg:flex">Sign in</button>

        {/* hamburger */}
        <button
          onClick={toggleNavigation}
          className="lg:hidden ml-auto hover:scale-110 transition-transform duration-300 active:scale-95"
        >
          {openNavigation ? <span>X</span> : <span>Menu</span>}
        </button>
      </nav>
    </header>
  );
}
