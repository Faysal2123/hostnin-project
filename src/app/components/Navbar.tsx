"use client";
import Image from "next/image";
import { FiChevronDown, FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.webp";
import { useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoIosMenu, IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl mx-auto bg-white flex items-center justify-between py-4 px-2 sm:py-5 sm:px-6 lg:px-8 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Hostnin Logo" width={100} height={28} className="object-contain w-[100px] h-[28px] sm:w-[160px] sm:h-[40px]" />
      </div>
     
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        <ul className="flex items-center gap-2 lg:gap-3 text-xs sm:text-sm font-medium text-gray-700">
          <li className="flex items-center text-sm sm:text-base gap-1 cursor-pointer hover:text-blue-600 transition-colors">Hosting <IoMdArrowDropdown size={18}/></li>
          <li className="flex items-center text-sm sm:text-base gap-1 cursor-pointer hover:text-blue-600 transition-colors">Domain </li>
          <li className="flex items-center text-sm sm:text-base gap-1 cursor-pointer hover:text-blue-600 transition-colors">Server <IoMdArrowDropdown size={18}/></li>
          <li className="flex items-center text-sm sm:text-base gap-1 cursor-pointer hover:text-blue-600 transition-colors">About <IoMdArrowDropdown size={18}/></li>
        </ul>
        <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded text-sm sm:text-base font-semibold flex items-center gap-1 ">
          <span><FaBangladeshiTakaSign size={13} /></span> BDT <IoMdArrowDropdown size={18} />
        </button>
        <FiSearch className="text-gray-700 text-lg sm:text-xl cursor-pointer hover:text-blue-600 transition-colors" />
        <span className="text-black/60 text-xl sm:text-2xl">|</span>
        <span><IoIosMenu size={22} /></span>
        <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 sm:px-6 py-2 sm:py-4 rounded font-semibold shadow hover:from-blue-600 hover:to-blue-500 transition-all text-xs sm:text-base">Dashboard</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2 sm:gap-3">
        <FiSearch className="text-gray-700 text-lg sm:text-xl cursor-pointer hover:text-blue-600 transition-colors" />
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded focus:outline-none"
        >
          {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden z-50">
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700 text-base">Hosting</span>
                <FiChevronDown className="text-xs" />
              </li>
              <li className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700 text-base">Domain</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700 text-base">Server</span>
                <FiChevronDown className="text-xs" />
              </li>
              <li className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700 text-base">About</span>
                <FiChevronDown className="text-xs" />
              </li>
            </ul>
            <div className="flex flex-col gap-2 pt-4">
              <button className="bg-blue-100 text-blue-700 px-3 py-2 rounded text-sm font-semibold flex items-center gap-1">
                <span>৳</span> BDT <FiChevronDown className="text-xs" />
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2 rounded font-semibold shadow text-sm">
                Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 