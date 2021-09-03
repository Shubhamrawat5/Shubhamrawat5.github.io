import moonImg from "../asserts/images/moon.svg";
import logo from "../asserts/images/sr-logo.png";

function Nav() {
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
      <div className="theme-mode-container">
        <img className="theme-mode-img" src={moonImg} alt="mode" />
      </div>
    </nav>
  );
}

export default Nav;
