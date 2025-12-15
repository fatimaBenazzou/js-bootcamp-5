import { useState } from "react";
import { useLocation } from "react-router";
import Button from "./Button";

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
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-border transition-all  ${
        openNavigation
          ? "bg-bg shadow-lg"
          : "bg-bg/90 backdrop-blur-sm hover:bg-bg/95"
      }`}
    >
      <nav className="flex items-center px-5 lg:px-8 xl:px-10 max-lg:py-4">
        {/* logo */}
        <a
          className="block w-48 xl:mr-8 transition-transform duration-300 hover:scale-105"
          href="#hero"
        >
          <img
            src={"/brainwave.svg"}
            width={190}
            height={40}
            alt="Brainwave"
            className="transition-opacity duration-300 hover:opacity-80"
          />
        </a>

        {/* links */}
        <div
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-20 left-0 right-0 bottom-0 bg-bg lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <ul className="relative z-20 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item, index) => (
              <li key={"nav" + index}>
                <a
                  href={item.url}
                  className={`block relative font-code text-2xl uppercase text-neutral transition-colors hover:text-accent-lavender ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-px lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-20 lg:text-neutral"
                      : "lg:text-neutral/50"
                  } lg:leading-5 lg:hover:text-neutral xl:px-12`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Decoration */}
          <div className="absolute inset-0 pointer-events-none lg:hidden">
            <div className="absolute inset-0 opacity-[.03]">
              <img
                className="w-full h-full object-cover"
                src={"/background.jpg"}
                width={688}
                height={953}
                alt="Background"
              />
            </div>

            {/* <Rings /> */}
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-neutral-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-neutral-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-neutral-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            {/* <SideLines /> */}
            <>
              <div className="absolute top-0 left-5 w-px h-full bg-stroke"></div>
              <div className="absolute top-0 right-5 w-px h-full bg-stroke"></div>
            </>
            {/* <BackgroundCircles /> */}
            <>
              <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
              <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
              <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
            </>
          </div>
        </div>

        <a
          href="#signup"
          className="button hidden mr-8 text-neutral/50 transition-colors hover:text-neutral lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        {/* Hamburger / X */}
        <Button
          className="ml-auto lg:hidden transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={toggleNavigation}
        >
          {openNavigation ? (
            <span className="icon-[mdi--close] w-4 h-4"></span>
          ) : (
            <span className={"icon-[mdi--menu] w-4 h-4"}></span>
          )}
        </Button>
      </nav>
    </header>
  );
}
