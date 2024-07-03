import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/services" className="hover:text-gray-400">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </nav>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
              <Link to="/services" className="hover:text-gray-400">
                Services
              </Link>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
