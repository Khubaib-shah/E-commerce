import React from "react";

export default function CategoryChip({ category, isChosen, onClick }) {
  const { name } = category;

  return (
    <button
      onClick={onClick}
      className={`inline-block px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 flex-grow
        ${
          isChosen
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
        }`}
    >
      {name}
    </button>
  );
}
