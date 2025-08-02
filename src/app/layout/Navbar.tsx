"use client";
import Image from "next/image";
import { useState} from "react";
import logo from "../assets/logo.webp";
import { FiMenu, FiX } from "react-icons/fi";
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


type DropdownItem = {
  title: string;
  description?: string;
  icon: React.ReactNode;
  link: string;
  bgColor?: string;
};

type MenuItem = {
  title: string;
  hasDropdown: boolean;
  megaMenu?: boolean;
  link?: string;
  dropdownItems?: DropdownItem[];
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 

  

  const menuItems: MenuItem[] = [
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
          bgColor: "bg-red-500",
        },
        {
          title: "Cloud Hosting",
          description: "Fast autoscaling server",
          icon: <FaCloud />,
          link: "/page/cloud-hosting",
          bgColor: "bg-blue-700",
        },
        {
          title: "WordPress Hosting",
          description: "Fully Managed WordPress",
          icon: <FaWordpress />,
          link: "/page/wordpress-hosting",
          bgColor: "bg-cyan-700",
        },
        {
          title: "Reseller Hosting",
          description: "Start your Business",
          icon: <FaBriefcase />,
          link: "/page/reseller-hosting",
          bgColor: "bg-green-600",
        },
        {
          title: "BDIX Hosting",
          description: "Lowest Network Latency",
          icon: <FaNetworkWired />,
          link: "/page/bdix-hosting",
          bgColor: "bg-teal-700",
        },
        {
          title: "Turbo Hosting",
          description: "Fast Speed Guaranteed",
          icon: <FaBolt />,
          link: "/page/turbo-hosting",
          bgColor: "bg-purple-800",
        },
      ],
    },
    {
      title: "Domain",
      hasDropdown: false,
      link: "/page/domain",
    },
    {
      title: "Server",
      hasDropdown: true,
      dropdownItems: [
        { title: "VPS", icon: <FaCloud />, link: "/page/server/vps", bgColor: "bg-cyan-700" },
        { title: "Dedicated", icon: <FaGamepad />, link: "/page/server/dedicated", bgColor: "bg-purple-700" },
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
          bgColor: "bg-pink-500",
        },
        {
          title: "Terms & Condition",
          description: "Our global infrastructure",
          icon: <FaDatabase />,
          link: "/page/about/condition",
          bgColor: "bg-green-500",
        },
        {
          title: "Contact",
          description: "Get in touch",
          icon: <FaPhone />,
          link: "/page/about/contact",
          bgColor: "bg-blue-600",
        },
      ],
    },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-50">
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
            <ul className="flex items-center gap-4 text-sm font-semibold text-gray-700 dark:text-gray-200">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                        {item.title} <IoMdArrowDropdown size={18} />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 mt-6 bg-white dark:bg-gray-700 rounded-xl shadow-2xl z-50 ${
                          item.title === "Hosting" ? "w-[540px]" : "w-64"
                        } opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4`}
                      >
                        <div
                          className={
                            item.title === "Hosting"
                              ? "grid grid-cols-2 gap-2"
                              : "flex flex-col gap-2"
                          }
                        >
                          {item.dropdownItems?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.link}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            >
                              <span className={`flex items-center justify-center w-10 h-10 ${subItem.bgColor} rounded-lg text-white text-xl`}>
                                {subItem.icon}
                              </span>
                              <div className="flex flex-col justify-center">
                                <p className="font-semibold text-gray-800 dark:text-white text-sm leading-tight">
                                  {subItem.title}
                                </p>
                                {subItem.description && (
                                  <p className="text-gray-500 dark:text-gray-300 text-xs">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.link || "#"}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <button className="bg-gradient-to-r from-blue-700 to-blue-600 dark:from-blue-600 dark:to-blue-500 text-white px-6 py-3 rounded font-semibold text-sm hover:from-blue-600 hover:to-blue-500 transition cursor-pointer">
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 cursor-pointer"
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-800 z-50 flex flex-col transition-all duration-300 ease-in-out transform ${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Hostnin Logo"
              width={150}
              height={30}
              className="object-contain dark:filter dark:brightness-0 dark:invert"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 transition-colors duration-200 cursor-pointer"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex-1 p-4 overflow-y-auto">
          <ul className="flex flex-col gap-0 text-sm font-semibold text-gray-700 dark:text-gray-200">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-100 dark:border-gray-700">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex justify-between items-center py-4 text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.title ? null : item.title)
                      }
                    >
                      <span>{item.title}</span>
                      <IoMdArrowDropdown
                        className={`transition-transform duration-300 ease-in-out ${
                          activeDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdown === item.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pl-4 pb-4 flex flex-col gap-2">
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="flex items-center gap-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
                          >
                            <span className={`text-lg ${subItem.bgColor} rounded-lg w-8 h-8 flex items-center justify-center text-white transition-transform duration-200 hover:scale-110`}>
                              {subItem.icon}
                            </span>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">{subItem.title}</span>
                              {subItem.description && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">{subItem.description}</span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link || "#"}
                    className="block py-4 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard Button - Fixed at Bottom */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-blue-500 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
            Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
