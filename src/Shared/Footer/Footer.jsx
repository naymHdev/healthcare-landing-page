import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#020043] text-white py-16">
        {/* Logo */}
        <div className="flex-shrink-0 px-4 md:container  mx-auto mb-10">
          <img src="/public/logo light (1).png" alt="Logo" className="h-8" />
        </div>
        <div className="px-4 md:container mx-auto text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <div>
              <p>123 Main Street Anytown, USA Postal Code: 12345</p>
              <p className="mt-5">Support: support@oyolloo.com</p>
              <p>(Available : 10:00am to 07:00pm)</p>
            </div>
          </div>
          <div>
            <nav className=" flex flex-col space-y-3">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link to="#" className="hover:text-gray-400">
                About us
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Success Page
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Terms and Conditions
              </Link>
            </nav>
          </div>
          <div>
            <nav className=" flex flex-col space-y-3">
              <Link to="#" className="hover:text-gray-400">
                Services
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Scheduling
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Contact Us
              </Link>
              <Link to="#" className="hover:text-gray-400">
                Patient Portal
              </Link>
            </nav>
          </div>
          <div>
            <p>Follow Us</p>

            <div className=" flex items-center gap-5 text-3xl mt-4">
              <FaFacebook />
              <FaInstagram />
              <TiSocialLinkedin />
              <FaYoutube />
            </div>
            <p className=" mt-10">@docplus 2024</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
