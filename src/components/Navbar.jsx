import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onScrollToContact, onScrollToServices }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = {
    Home: "/",
    Services: "services",
    Contact: "contact",
  };

  const handleNavClick = (label, path) => {
    if (label === "Contact") return onScrollToContact();
    if (label === "Services") return onScrollToServices();
    navigate(path);
    setIsMenuOpen(false); // close menu on click
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-[#4B3621]/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Scope Overseas
          </span>
        </div>

        {/* Hamburger Icon - Mobile only */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex space-x-8">
            {Object.entries(routes).map(([label, path], idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavClick(label, path)}
                  className="text-white hover:text-yellow-400 font-medium"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="w-full mt-4 md:hidden">
            <ul className="flex flex-col items-start space-y-4">
              {Object.entries(routes).map(([label, path], idx) => (
                <li key={idx} className="w-full">
                  <button
                    onClick={() => handleNavClick(label, path)}
                    className="block text-white hover:text-yellow-400 font-medium w-full text-left px-4"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
