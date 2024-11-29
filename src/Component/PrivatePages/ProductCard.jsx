import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  const { thumbnail, category, price, title, id } = item;

  return (
    <Link
      to={`/products/${id}`}
      className="lg:w-1/4 md:w-1/2 w-full p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full"
            src={thumbnail}
          />
        </div>
        <div className="p-4">
          <h3 className="text-blue-600 text-xs tracking-widest uppercase mb-2 font-semibold">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
            {title}
          </h2>
          <p className="text-gray-700 font-semibold">Price: ${price}</p>
        </div>
      </div>
    </Link>
  );
}
