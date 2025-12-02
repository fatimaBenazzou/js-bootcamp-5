import React from "react";

export default function App() {
  const mode = "";
  return (
    <div className={` ${mode === "light" ? "bg-red-400" : "bg-amber-600"}`}>
      <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6 shadow-lg">
        <div className="flex items-center shrink-0 text-white mr-6">
          <span className="font-semibold text-2xl tracking-tight">
            My Awesome Site
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block"
          id="nav-content"
        >
          <div className="text-lg lg:flex-grow">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg shadow-inner mt-6">
        <div className="h-24 bg-primary  text-neutral-text flex items-center justify-center rounded-">
          Grid Item A
        </div>
        <div className="h-24 bg-purple-400 flex items-center justify-center text-white rounded">
          Grid Item B
        </div>
        <div className="h-24 bg-pink-400 flex items-center justify-center text-white rounded">
          Grid Item C
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
        Hover or Focus Me!
      </button>

      <ul className="mt-4">
        <li className="p-2 border-b last:border-b-0 odd:bg-gray-50 hover:bg-gray-100">
          List Item 1
        </li>
        <li className="p-2 border-b last:border-b-0 even:bg-gray-50 hover:bg-gray-100">
          List Item 2
        </li>
        <li className="p-2 border-b test ">List Item 3</li>
      </ul>
    </div>
  );
}
