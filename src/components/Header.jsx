import dp from "../asserts/images/dp1.jpg";
import tgImg from "../asserts/images/social/telegram.svg";
import ghImg from "../asserts/images/social/github.svg";
import igImg from "../asserts/images/social/insta.png";
import liImg from "../asserts/images/social/linkedin.svg";

function Header() {
  const nameCharacterElements = document.querySelectorAll(".name-char");
  function animateName() {
    let t = 0;
    nameCharacterElements.forEach((charElement) => {
      t += 115;
      setTimeout(() => {
        charElement.classList.add("name-color");
        setTimeout(() => {
          charElement.classList.remove("name-color");
        }, 140);
      }, t);
    });
  }

  animateName();
  setInterval(() => {
    animateName();
  }, 1800);

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
          <img className="social-logo right-slogo" src={ghImg} alt="Github" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/KryptonPVX"
        >
          <img className="social-logo left-slogo" src={tgImg} alt="Telegram" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shubham-rawat-63958416a"
        >
          <img className="social-logo right-slogo" src={liImg} alt="Linkedin" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/shubhamraw.exe"
        >
          <img className="left-slogo social-logo" src={igImg} alt="Instagram" />
        </a>
      </div>
    </header>
  );
}

export default Header;
