import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-white sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Logo or Brand */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">
              MyWebsite
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center text-base space-x-6">
            <Link
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
              to="Profile"
            >
              Profile
            </Link>
            <Link
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
              to="Contact"
            >
              Contact us
            </Link>
            <Link
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
              to="About"
            >
              About
            </Link>
          </nav>

          {/* Button */}
          <div className="flex gap-2">
            <ShoppingCartOutlined />
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 mt-4 md:mt-0">
               Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Render child components */}
      <Outlet />
    </>
  );
}
