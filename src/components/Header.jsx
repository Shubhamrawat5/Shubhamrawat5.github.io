import dp from "../assets/images/shubham.jpg";
import telegramIcon from "../assets/images/social/telegram.svg";
import githubIcon from "../assets/images/social/github.svg";
import instagramIcon from "../assets/images/social/insta.png";
import linkedinIcon from "../assets/images/social/linkedin.svg";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const nameCharacterElements = document.querySelectorAll(".name-char");
    setInterval(() => {
      let t = 0;
      nameCharacterElements.forEach((charElement) => {
        t += 120;
        setTimeout(() => {
          // charElement.classList.add("name-color");
          charElement.style.color = "yellow";
          setTimeout(() => {
            // charElement.classList.remove("name-color");
            charElement.style.color = "white";
          }, 150);
        }, t);
      });
    }, 2000);
  }, []);

  return (
    <header id="head-section">
      <img id="dp" src={dp} alt="profile pic" />
      <h1 className="name">
        Hey there!
        <div className="name-im">
          <span className="im">I'm </span>
          <div>
            <span className="name-char">S</span>
            <span className="name-char">h</span>
            <span className="name-char">u</span>
            <span className="name-char">b</span>
            <span className="name-char">h</span>
            <span className="name-char">a</span>
            <span className="name-char">m </span>
          </div>
          <div>
            <span className="name-char">R</span>
            <span className="name-char">a</span>
            <span className="name-char">w</span>
            <span className="name-char">a</span>
            <span className="name-char">t</span>
          </div>
        </div>
      </h1>

      <div className="social-profiles">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Shubhamrawat5"
        >
          <img
            className="social-logo right-slogo"
            src={githubIcon}
            alt="Github"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/KryptonPVX"
        >
          <img
            className="social-logo left-slogo"
            src={telegramIcon}
            alt="Telegram"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shubham-rawat-63958416a"
        >
          <img
            className="social-logo right-slogo"
            src={linkedinIcon}
            alt="Linkedin"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/shubhamraw.exe"
        >
          <img
            className="left-slogo social-logo"
            src={instagramIcon}
            alt="Instagram"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
