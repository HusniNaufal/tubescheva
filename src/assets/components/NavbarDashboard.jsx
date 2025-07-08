import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarDashboard = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav className="w-full h-16 bg-[#FDD23AB2] shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/Tuko-logo-trns.png" alt="Tuko Logo" className="h-32 w-auto" />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/about" className="px-3 py-2 text-orange-500 hover:text-orange-800 font-medium transition-colors duration-200">
            About Us
          </Link>
          <Link to="/contact" className="px-3 py-2 text-orange-500 hover:text-orange-800 font-medium transition-colors duration-200">
            Contact Us
          </Link>

          <div className="h-8 border-3 rounded-md border-orange-500"></div>
          <div className="flex flex-row">
            <div className="flex-1/3">
              <svg
                className="w-10 h-10 text-gray-700" // Sesuaikan 'w', 'h', dan 'text-color'
                fill="currentColor" // Mengisi bentuk dengan warna
                viewBox="0 0 20 20" // ViewBox yang sedikit berbeda untuk ikon solid ini
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="flex-2/3 space-y-[-10%]">
              <h1 className="font-bold">Hakumii</h1>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
