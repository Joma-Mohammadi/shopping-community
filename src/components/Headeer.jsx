import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import navigation from "../data/navigation.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* DESKTOP HEADER */}
      <div className="mx-auto hidden h-17.5 w-full max-w-450 items-center px-6 lg:flex xl:px-10">
        {/* Logo */}
        <NavLink to="/" className="flex w-62.5 shrink-0 items-center">
          <img src="../src/images/logo.png" alt="" className="w-45" />
        </NavLink>

        {/* Search */}
        <div className="mx-auto flex items-center gap-2">
          <div className="h-12.5 w-100 rounded-full border border-gray-200">
            <input type="text" placeholder="Search" className="h-full w-full rounded-full px-5 text-sm outline-none" />
          </div>
          <button type="button" className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-green-600 text-white">
            <FaSearch size={16} />
          </button>
        </div>

        {/* Account / Cart */}
        <div className="flex w-62.5 shrink-0 items-center justify-end gap-5 text-sm">
          <NavLink to="/account">Your Account</NavLink>
          <div className="h-5 w-px bg-gray-200" />
          <NavLink to="/cart" className="relative">
            <HiOutlineShoppingBag size={24} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">
              {cartCount}
            </span>
          </NavLink>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="lg:hidden">
        {/* Top Row */}
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
          {/* Hamburger */}
          <button type="button" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation menu" className="flex items-center justify-center text-green-900">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Account / Cart */}
          <div className="flex items-center gap-5">
            <NavLink to="/account" className="text-[15px] font-medium text-gray-700">
              Your Account
            </NavLink>

            <NavLink to="/cart" className="relative flex items-center">
              <HiOutlineShoppingBag size={23} className="text-gray-700" />
              <span className="absolute -right-2 -top-2 flex h-4.25 w-4.25 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">
                {cartCount}
              </span>
            </NavLink>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className={`overflow-hidden border-b border-gray-100 transition-all duration-300 ${menuOpen ? "max-h-150" : "max-h-0"}`}>
          <nav className="px-5 py-4">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `border-b border-gray-100 py-3 text-base transition ${isActive ? "font-medium text-green-700" : "text-gray-700"}`}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        {/* MOBILE SEARCH */}
        <div className="flex items-center gap-3 px-5 py-6">
          <div className="h-12.5 min-w-0 flex-1 rounded-full border border-gray-200">
            <input type="text" placeholder="Search" className="h-full w-full rounded-full px-5 py-3 text-base outline-none placeholder:text-gray-300" />
          </div>

          <button type="button" aria-label="Search" className="flex h-12.5 w-12.5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
            <FaSearch size={20} />
          </button>
        </div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden border-t border-gray-100 lg:block">
        <div className="mx-auto flex h-12 max-w-360 items-center justify-center gap-8 px-6">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `text-base transition ${isActive ? "font-medium text-green-700" : "text-gray-700 hover:text-green-700"}`}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}