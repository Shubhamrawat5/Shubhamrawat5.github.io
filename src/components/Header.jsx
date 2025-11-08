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
          charElement.style.color = "#cbf015";
          setTimeout(() => {
            charElement.style.color = "#ffffff";
          }, 150);
        }, delay);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const firstName = "Shubham ";
  const lastName = "Rawat";

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Shubhamrawat5",
      icon: githubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shubham-rawat-63958416a",
      icon: linkedinIcon,
    },
    { name: "Telegram", href: "https://t.me/KryptonPVX", icon: telegramIcon },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shubhamm.rawatt",
      icon: instagramIcon,
    },
  ];

  return (
    <header
      id="head-section"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 
      bg-gray-900 text-center"
    >
      {/* Profile Picture */}
      <img
        src={dp}
        alt="Shubham Rawat"
        className="w-56 sm:w-44 rounded-full object-cover shadow-lg ring-2 ring-white"
      />

      {/* Name */}
      <h1 className="text-gray-100 text-4xl sm:text-3xl mt-6 font-poppins">
        Hey there!
        <div className="font-['Rock_Salt',cursive] mt-1">
          <span className="block sm:inline">I'm </span>
          <div className="inline-block mx-2">
            {firstName.split("").map((char, i) => (
              <span
                key={i}
                className="name-char text-3xl sm:text-2xl text-gray-100"
              >
                {char}
              </span>
            ))}
          </div>
          <div className="inline-block mx-2">
            {lastName.split("").map((char, i) => (
              <span
                key={i}
                className="name-char text-3xl sm:text-2xl text-gray-100"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </h1>

      {/* Social Icons */}
      <div className="absolute bottom-4 flex justify-center flex-wrap gap-3">
        {socials.map(({ href, icon }, i) => (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            <img
              src={icon}
              alt="Social icon"
              className="w-10 h-10 m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
