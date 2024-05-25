import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="container mx-auto px-6 py-3 bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                className="rounded-full size-16 border  "
                src="/public/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center justify-around space-x-8">
              <li>
                <Link to="/products/category/jewelery" className="text-white">
                  Joyería
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category/men's clothing"
                  className="text-white"
                >
                  Hombre
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category/electronics"
                  className="text-white"
                >
                  Electronica
                </Link>
              </li>
              <li>
                <Link
                  to="/products/category/women's clothing"
                  className="text-white"
                >
                  Mujer
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-center">
            <CartWidget />
          </div>
          <div className="md:hidden">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-white"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                Hombre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                Mujer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                Niños
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                Accesorios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white bg-gray-900 rounded"
              >
                Acerca de
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
