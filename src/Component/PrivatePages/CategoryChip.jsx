import React from "react";

export default function CategoryChip({ category, isChosen, onClick }) {
  // Support both string and object format
  const label = typeof category === "string" ? category : category.name;

  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-blue-400
        ${
          isChosen
            ? "bg-blue-600 text-white border-blue-600 shadow-md"
            : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600"
        }`}
    >
      {label}
    </button>
  );
}
