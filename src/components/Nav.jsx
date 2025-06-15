import React from "react";
import moonImg from "../assets/images/moon.svg";
import lightImg from "../assets/images/sun.png";
import logo from "../assets/images/sr-logo.png";

const Nav = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    document.querySelector("#logo")?.classList.toggle("invert");

    const themeIcon = document.querySelector(".theme-mode-img");
    if (themeIcon) {
      themeIcon.classList.remove("theme-animate");
      setTimeout(() => themeIcon.classList.add("theme-animate"));
    }

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { name: "Home", href: "#head-section" },
    { name: "About", href: "#aboutme" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#workdone" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav>
      <div className="sr-logo">
        <img id="logo" className="invert" src={logo} alt="Logo" />
      </div>

      <ul className="navbar-headings">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div className="theme-mode-container" onClick={toggleTheme}>
        <img
          className="theme-mode-img"
          src={theme === "dark" ? moonImg : lightImg}
          alt={theme === "dark" ? "Moon icon" : "Sun icon"}
        />
      </div>
    </nav>
  );
};

export default Nav;
