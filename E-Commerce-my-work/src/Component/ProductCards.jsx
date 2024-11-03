import React from "react";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  const { thumbnail, title, category, price, id } = product;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-200">
      <p className="block relative h-48 rounded-lg overflow-hidden">
        <img
          alt={title}
          className="object-cover cursor-pointer transition-transform shadow-inner hover:shadow-xl transform hover:scale-110 object-center w-full h-full"
          src={thumbnail}
        />
      </p>
      <div className="mt-4 cursor-default">
        <h3 className="text-indigo-500 text-xs tracking-widest mb-1 uppercase">
          {category}
        </h3>
        <h2 className="text-gray-800 title-font text-lg font-semibold">
          {title}
        </h2>
        <div className="flex justify-between">
          <p className="mt-1 text-green-600 font-bold">${price}</p>
          <Link to={`/product/${id}`} className="block">
            <span className="bg-indigo-50 border rounded px-1 shadow-inner text-blue-700">
              See more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
