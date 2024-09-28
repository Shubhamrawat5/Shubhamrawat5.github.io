import React from "react";
import moonImg from "../assets/images/moon.svg";
import lightImg from "../assets/images/sun.png";
import logo from "../assets/images/sr-logo.png";

const Nav = ({ theme, setTheme }) => {
  const changeThemeHandler = () => {
    // Toggle invert class on logo
    const logoElement = document.querySelector("#logo");
    if (logoElement) {
      logoElement.classList.toggle("invert");
    }

    // Trigger animation on theme mode image
    const currentThemeMode = document.querySelector(".theme-mode-img");
    if (currentThemeMode) {
      currentThemeMode.classList.remove("theme-animate");
      setTimeout(() => {
        currentThemeMode.classList.add("theme-animate");
      });
    }

    // Toggle theme between light and dark
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav>
      <div className="sr-logo">
        <img id="logo" className="invert" src={logo} alt="Logo" />
      </div>
      <ul className="navbar-headings">
        <li>
          <a href="#head-section">Home</a>
        </li>
        <li>
          <a href="#aboutme">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#workdone">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="theme-mode-container" onClick={changeThemeHandler}>
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
