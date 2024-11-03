import React from "react";

export default function CategoryChip({ category , isSelected, onCLick}) {
  // console.log(isSelected)
  const { name } = category;
  // console.log(onCLick)

  
  return (
    <h4 onClick={onCLick} className={`border border-gray-200 p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex-grow text-center font-semibold tracking-wide ${isSelected ? 'bg-[#4F46E5] text-white' : 'bg-white text-[#4F46E5]'} hover:bg-[#4F46E5] hover:text-white`}>
    {name}
  </h4>
  
  );
}
