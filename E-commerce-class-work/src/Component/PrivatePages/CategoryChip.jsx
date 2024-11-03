import React from "react";

export default function CategoryChip({ category, isChosen, onClick }) {
  const { name } = category;

  return (
    <div
      onClick={onClick}
      className={`p-2 border rounded px-4 ${
        isChosen ? "bg-purple-400 text-white border-purple-400" : "bg-white text-black border-purple-400"
      } hover:bg-purple-200 hover:text-white transition-colors`}
    >
      <h1>{name}</h1>
    </div>
  );
}