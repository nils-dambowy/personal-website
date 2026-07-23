import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "About",
      path: "/about",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 lg:h-7 lg:w-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" x2="9.01" y1="9" y2="9"></line>
          <line x1="15" x2="15.01" y1="9" y2="9"></line>
        </svg>
      ),
    },
    {
      name: "Projects",
      path: "/projects",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 lg:h-7 lg:w-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      ),
    },
    {
      name: "Contact",
      path: "/contact",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 lg:h-7 lg:w-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
        </svg>
      ),
    },
  ];

  return (
    <header className="w-full bg-white flex items-center justify-between border-b-2 border-black sticky top-0 z-50 shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center justify-center border-r-2 border-black w-24 sm:w-1/4 h-20 text-3xl sm:text-4xl lg:text-5xl font-black">
        <Link
          to="/"
          className="hover:scale-105 transition-transform flex items-center justify-center w-full h-full text-black hover:text-blue-700"
        >
          nd
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex w-3/4 h-20">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `border-r-2 border-black w-1/3 h-full flex items-center justify-center font-bold text-xl lg:text-3xl transition-colors duration-150 ${
                isActive
                  ? "bg-[#ffc229] text-black border-b-4 border-b-black"
                  : "bg-white text-black hover:bg-slate-100"
              }`
            }
          >
            <div className="flex items-center justify-center header-icons mr-2 sm:mr-3">
              {item.icon}
            </div>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="sm:hidden flex items-center pr-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 border-2 border-black bg-[#ffc229] shadow-[3px_3px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000]"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-white border-b-4 border-black sm:hidden flex flex-col z-50"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-center py-4 border-b-2 border-black font-bold text-2xl ${
                    isActive ? "bg-[#ffc229]" : "bg-white hover:bg-slate-50"
                  }`
                }
              >
                <div className="flex items-center justify-center mr-3 p-2 bg-[#ffc229] border-2 border-black rounded-full shadow-[2px_2px_0px_#000]">
                  {item.icon}
                </div>
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
