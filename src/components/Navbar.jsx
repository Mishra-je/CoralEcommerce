import React, { useState } from "react";
import { FaBars, FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];

  return (
    <header className="bg-white md:shadow-md ">
      <nav className="grid grid-cols-1 sm:grid-cols-3 items-center container mx-auto px-4 py-4 gap-4">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </a>
          <button
            className="sm:hidden block text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoMdClose className="w-7 h-7" />
            ) : (
              <FaBars className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full">
          <input
            type="search"
            placeholder="Search here..."
            className="flex-grow placeholder:pl-1 border-gray-300 border rounded-md p-2 sm:py-3 focus:outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-3 sm:py-4 rounded-md hover:bg-blue-600 transition duration-300">
            <FaSearch />
          </button>
        </div>

        {/* User Links */}
        <div className="hidden md:flex justify-end items-center gap-6 text-gray-600 text-lg ml-4">
          {/* <a
            className="flex items-center gap-2 hover:text-blue-500 transition duration-300"
            href="/"
          >
            <FaUser /> <span className="">Account</span>
          </a> */}
          <Link to="/account"  className="flex items-center gap-2 hover:text-blue-500 transition duration-300"> <FaUser /> <span className="">Account</span></Link>
          <a
            className="flex items-center gap-2 hover:text-blue-500 transition duration-300"
            href="/"
          >
            <FaShoppingBag /> <span className="">Cart</span>
          </a>
        </div>
      </nav>

      {/* Horizontal Divider */}
      <hr className="border-gray-200" />

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-500 py-4 px-4 sm:hidden`}
      >
        <ul className="flex flex-col gap-4 text-white">
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="transform hover:scale-105 hover:text-blue-500 text-md transition-transform duration-300"
            >
              <Link to={path}>{title}</Link>
            </li>
          ))}
          <li className="transform hover:scale-105 hover:text-blue-500 text-md transition-transform duration-300">
            <a href="/">
              <FaUser className="inline-block mr-2" /> Account
            </a>
          </li>
          <li className="transform hover:scale-105 hover:text-blue-500 text-md transition-transform duration-300">
            <a href="/">
              <FaShoppingBag className="inline-block mr-2" /> Shopping
            </a>
          </li>
        </ul>
      </div>

      {/* Category Items */}
      <div className="pt-4 pb-4 bg-gray-50">
        <ul className="hidden xl:flex items-center justify-between text-black  px-4">
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="transform hover:scale-105 primarycolor  hover:text-blue-500 text-md transition-transform duration-300"
            >
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
