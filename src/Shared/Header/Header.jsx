import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { VscThreeBars } from "react-icons/vsc";
import Button from "../../Components/Button/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-[#F1F2F4] text-black p-4">
        <div className=" px-4 md:px-8 max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/public/logo dark.png" alt="Logo" className="h-8" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="#" className="hover:text-gray-400">
              Services
            </Link>
            <Link to="#" className="hover:text-gray-400">
              Blog
            </Link>
            <Link to="#" className="hover:text-gray-400">
              About us
            </Link>
          </nav>

          {/* Button */}
          <Button border="border border-black" />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <VscThreeBars className=" text-xl text-black" />
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
              <Link to="#" className="hover:text-gray-400">
                Services
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Blog
              </Link>
              <Link to="#" className="hover:text-gray-400">
                About us
              </Link>
              <div className=" flex items-center justify-center gap-2 border border-black rounded-xl py-1 hover:cursor-pointer">
                <p>Appointment</p>
                <GoArrowUpRight />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
