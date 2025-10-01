import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <h1 className="font-bold text-xl sm:text-2xl cursor-pointer">
        <span className="text-slate-500">Harry</span>
        <span className="text-slate-700">Estate</span>
      </h1>

      {/* Search Bar */}
      <form className="hidden md:flex items-center border border-slate-300 rounded-lg overflow-hidden w-64">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 w-full outline-none text-sm"
        />
        <button type="submit" className="px-3 bg-slate-100 hover:bg-slate-200">
          <FaSearch className="text-slate-600" />
        </button>
      </form>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-slate-700">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Sign In</li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {menuOpen ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-40 md:hidden">
          <ul className="flex flex-col gap-4 font-medium text-slate-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Sign In</li>
          </ul>
          <form className="mt-4 flex items-center border border-slate-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 w-full outline-none text-sm"
            />
            <button type="submit" className="px-3 bg-slate-100 hover:bg-slate-200">
              <FaSearch className="text-slate-600" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
