import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import NotFound from "./NotFound";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);
    setLoading(true);

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (notFound) {
    return <NotFound />;
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-gray-100">
      <div className="container mx-auto px-5 py-16">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white shadow-md rounded-lg">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full object-cover object-center rounded-l-lg"
            src={product.thumbnail}
          />
          <div className="lg:w-1/2 w-full p-6">
            <h2 className="text-sm text-gray-500 tracking-widest uppercase">
              {product.brand}
            </h2>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <p className="leading-relaxed text-gray-600 mb-4">
              {product.description}
            </p>

            <div className="flex items-center mb-4">
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.round(product.rating)
                        ? "text-indigo-500"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="ml-3 text-gray-600">
                {product.rating} / 5 Reviews
              </span>
            </div>

            <div className="flex items-center mb-4">
              <span className="mr-3">Color:</span>
              {["red", "blue", "green"].map((color, index) => (
                <button
                  key={index}
                  className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
                    color === "red"
                      ? "bg-red-500"
                      : color === "blue"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>

            <div className="flex items-center mb-6">
              <span className="mr-3">Size:</span>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                defaultValue="M"
              >
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              <button className="ml-auto bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 focus:outline-none">
                Add to Cart
              </button>
              <button
                aria-label="Add to Wishlist"
                className="ml-4 w-10 h-10 rounded-full bg-gray-200 text-gray-500 hover:text-gray-600 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
