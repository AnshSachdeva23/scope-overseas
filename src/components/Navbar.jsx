import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-[#4B3621]/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Scope Overseas
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#3a2b1c] rounded-lg bg-[#4B3621]/80 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            {["Home", "About", "Services", "Pricing", "Contact"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
