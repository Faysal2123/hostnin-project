"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

import {
  FaServer,
  FaCloud,
  FaWordpress,
  FaBriefcase,
  FaNetworkWired,
  FaBolt,
  FaGamepad,
  FaBuilding,
  FaDatabase,
  FaPhone,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
  }, []);



  const menuItems = [
    {
      title: "Hosting",
      hasDropdown: true,
      megaMenu: true,
      dropdownItems: [
        {
          title: "Web Hosting",
          description: "NVMe SSD server",
          icon: <FaServer />,
          link: "/page/web-hosting",
        },
        {
          title: "Cloud Hosting",
          description: "Fast autoscaling server",
          icon: <FaCloud />,
          link: "/page/cloud-hosting",
        },
        {
          title: "WordPress Hosting",
          description: "Fully Managed WordPress",
          icon: <FaWordpress />,
          link: "/page/wordpress-hosting",
        },
        {
          title: "Reseller Hosting",
          description: "Start your Business",
          icon: <FaBriefcase />,
          link: "/page/Reseller-Hosting",
        },
        {
          title: "BDIX Hosting",
          description: "Lowest Network Latency",
          icon: <FaNetworkWired />,
          link: "/page/BDIX-Hosting",
        },
        {
          title: "Turbo Hosting",
          description: "Fast Speed Guaranteed",
          icon: <FaBolt />,
          link: "/page/Turbo-Hosting",
        },
      ],
    },
    {
      title: "Domain",
      hasDropdown: false,
      link: "/domain",
    },
    {
      title: "Server",
      hasDropdown: true,
      dropdownItems: [
        { title: "VPS", icon: <FaCloud />, link: "#" },
        { title: "Dedicated", icon: <FaGamepad />, link: "#" },
      ],
    },
    {
      title: "About",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Privacy Policy",
          description: "Learn about us",
          icon: <FaBuilding />,
          link: "/page/about/privacy",
        },
        {
          title: "Terms & Condition",
          description: "Our global infrastructure",
          icon: <FaDatabase />,
          link: "/page/about/condition",
        },
        { title: "Contact", description: "Get in touch", icon: <FaPhone />, link: "/page/about/contact" },
      ],
    },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-70">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Hostnin Logo"
              width={200}
              height={40}
              className="object-contain dark:filter dark:brightness-0 dark:invert"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-200">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {item.title} <IoMdArrowDropdown size={18} />
                      </button>
                      {/* Dropdown */}
                      <div
                        className={`absolute left-0 mt-2 bg-white dark:bg-gray-700 rounded-xl shadow-2xl z-50 ${
                          item.title === "Hosting" ? "w-[540px]" : "w-64"
                        } opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 flex flex-col gap-2`}
                      >
                        <div
                          className={
                            item.title === "Hosting"
                              ? "grid grid-cols-2 gap-4"
                              : "flex flex-col"
                          }
                        >
                          {item.dropdownItems?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.link || "/"}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            >
                              <span className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300 text-xl">
                                {subItem.icon}
                              </span>
                              <div>
                                <p className="font-semibold text-gray-800 dark:text-white text-base">
                                  {subItem.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.link}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <button className="bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 text-white px-5 py-2 rounded font-semibold text-sm hover:from-blue-600 hover:to-blue-500 transition">
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <FiSearch className="text-gray-700 dark:text-gray-300 text-xl cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-40 p-4">
          <ul className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex justify-between items-center py-2 text-left hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.title ? null : item.title)
                      }
                    >
                      <span className="flex items-center gap-2">{item.title}</span>
                      <IoMdArrowDropdown
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="pl-4 mt-2 flex flex-col gap-2">
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                          >
                            <span className="text-lg">{subItem.icon}</span>
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}

            <button className="mt-3 w-full bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 text-white py-2 rounded font-semibold text-sm hover:from-blue-600 hover:to-blue-500 transition">
              Dashboard
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
