import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
          
         
          <div className="relative">
            <button 
              onClick={toggleLanguageDropdown}
              className="flex items-center px-3 py-2 text-orange-500 hover:text-orange-800 font-medium transition-colors duration-200"
            >
              <span>Bahasa</span>
              <svg 
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'transform rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            
            
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <button 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => setIsLanguageOpen(false)}
                >
                  Indonesia
                </button>
                <button 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => setIsLanguageOpen(false)}
                >
                  English
                </button>
              </div>
            )}
          </div>

          <div className="h-8 border-3 rounded-md border-orange-500"></div>
          
          
          <Link 
            to="/login" 
            className="px-4 py-2 text-orange-500 hover:text-orange-800 font-medium transition-colors duration-200"
          >
            Masuk
          </Link>
          <Link 
            to="/register" 
            className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-400 transition-colors duration-200"
          >
            Daftar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;