import React from "react";
import logo from "../assets/images/sr-logo.png";

const Nav = () => {
  const navLinks = [
    { name: "Home", href: "#head-section" },
    { name: "About", href: "#aboutme" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#workdone" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full h-12 px-6 flex items-center justify-end 
      bg-gray-900 text-gray-100 shadow-md"
    >
      {/* Logo */}
      <div className="absolute left-4 flex items-center justify-center invert">
        <img src={logo} alt="Logo" className="w-11 h-11 opacity-95" />
      </div>

      {/* Navbar Links */}
      <ul className="hidden sm:flex space-x-6 mr-4 text-sm sm:text-base font-medium tracking-wide">
        {navLinks.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              className="cursor-pointer hover:text-sky-400 transition-colors duration-200"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
