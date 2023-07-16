import tgImg from "../assets/images/social/telegram.svg";
import ghImg from "../assets/images/social/github.svg";
import igImg from "../assets/images/social/insta.png";
import liImg from "../assets/images/social/linkedin.svg";

function Footer() {
  return (
    <footer>
      <div className="social-profiles">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Shubhamrawat5"
        >
          <img className="social-logo" src={ghImg} alt="Github" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/KryptonPVX"
        >
          <img className="social-logo" src={tgImg} alt="Telegram" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shubham-rawat-63958416a"
        >
          <img className="social-logo" src={liImg} alt="Linkedin" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/shubhamraw.exe"
        >
          <img className="social-logo" src={igImg} alt="Instagram" />
        </a>
      </div>
      <p>CODED WITH ❤️ BY SHUBHAM</p>
    </footer>
  );
}

export default Footer;
