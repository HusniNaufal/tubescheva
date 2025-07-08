// src/components/CloseButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function CloseButton({ targetPath = "/" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetPath);
  };

  return (
    <button
      onClick={handleClick}
      className="
        p-1
        rounded-xl
        bg-orange-500
        hover:bg-orange-800
        focus:outline-none
        focus:ring-2
        focus:ring-gray-500
        focus:ring-opacity-50
        transition-colors
        duration-200
      "
      aria-label="Close"
    >
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  );
}

export default CloseButton;
