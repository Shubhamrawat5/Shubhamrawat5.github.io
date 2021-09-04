import moonImg from "../asserts/images/moon.svg";
import lightImg from "../asserts/images/sun.png";
import logo from "../asserts/images/sr-logo.png";

function Nav({ theme, setTheme }) {
  function changeThemeHandler() {
    let logo = document.querySelector("#logo");
    logo.classList.toggle("invert");
    let currentThemeMode = document.querySelector(".theme-mode-img");
    currentThemeMode.classList.remove("theme-animate");
    setTimeout(() => {
      currentThemeMode.classList.add("theme-animate");
    });

    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  }

  return (
    <nav>
      <div className="sr-logo">
        <img id="logo" className="invert" src={logo} alt="" />
      </div>
      <div className="navbar-headings">
        <a href="#head-section">
          <li>Home</li>
        </a>
        <a href="#aboutme">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#workdone">
          <li>Work</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </div>
      <div
        className="theme-mode-container"
        onClick={() => changeThemeHandler()}
      >
        <img
          className={"theme-mode-img"}
          src={theme === "dark" ? moonImg : lightImg}
          alt="mode"
        />
      </div>
    </nav>
  );
}

export default Nav;
