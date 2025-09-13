import React from "react";
import githubIcon from "../assets/images/social/github.svg";
import telegramIcon from "../assets/images/social/telegram.svg";
import linkedinIcon from "../assets/images/social/linkedin.svg";
import instagramIcon from "../assets/images/social/insta.png";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Shubhamrawat5",
    icon: githubIcon,
  },
  {
    name: "Telegram",
    url: "https://t.me/KryptonPVX",
    icon: telegramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shubham-rawat-63958416a",
    icon: linkedinIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shubhamm.rawatt",
    icon: instagramIcon,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="social-profiles">
        {socialLinks.map(({ name, url, icon }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <img className="social-logo" src={icon} alt={`${name} Icon`} />
          </a>
        ))}
      </div>
      <p>CODED WITH ❤️ BY SHUBHAM</p>
    </footer>
  );
};

export default Footer;
