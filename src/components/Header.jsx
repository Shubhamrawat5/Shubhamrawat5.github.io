import { useEffect } from "react";
import dp from "../assets/images/shubham.jpg";
import telegramIcon from "../assets/images/social/telegram.svg";
import githubIcon from "../assets/images/social/github.svg";
import instagramIcon from "../assets/images/social/insta.png";
import linkedinIcon from "../assets/images/social/linkedin.svg";

function Header() {
  useEffect(() => {
    const nameCharacterElements = document.querySelectorAll(".name-char");

    const interval = setInterval(() => {
      let delay = 0;
      nameCharacterElements.forEach((charElement) => {
        delay += 120;
        setTimeout(() => {
          charElement.style.color = "yellow";
          setTimeout(() => {
            charElement.style.color = "white";
          }, 150);
        }, delay);
      });
    }, 2000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const firstName = "Shubham ";
  const lastName = "Rawat";

  return (
    <header id="head-section">
      <img id="dp" src={dp} alt="Shubham Rawat profile" />
      <h1 className="name">
        Hey there!
        <div className="name-im">
          <span className="im">I'm </span>
          <div>
            {firstName.split("").map((char, i) => (
              <span key={`fn-${i}`} className="name-char">
                {char}
              </span>
            ))}
          </div>
          <div>
            {lastName.split("").map((char, i) => (
              <span key={`ln-${i}`} className="name-char">
                {char}
              </span>
            ))}
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
            alt="GitHub Profile"
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
            alt="LinkedIn Profile"
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
            alt="Telegram Profile"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/shubhamm.rawatt"
        >
          <img
            className="social-logo left-slogo"
            src={instagramIcon}
            alt="Instagram Profile"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
