import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onScrollToContact, onScrollToServices }) => {
  const navigate = useNavigate();

  const routes = {
    Home: "/",
    Services: "services",
    Contact: "contact", // special case
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-[#4B3621]/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Scope Overseas
          </span>
        </div>

        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="flex space-x-8">
            {Object.entries(routes).map(([label, path], idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    if (label === "Contact") return onScrollToContact();
                    if (label === "Services") return onScrollToServices();
                    navigate(path);
                  }}
                  className="text-white hover:text-yellow-400 font-medium"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
