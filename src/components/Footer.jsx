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
    alt: "Github",
  },
  {
    name: "Telegram",
    url: "https://t.me/KryptonPVX",
    icon: telegramIcon,
    alt: "Telegram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shubham-rawat-63958416a",
    icon: linkedinIcon,
    alt: "Linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shubhamraw.exe",
    icon: instagramIcon,
    alt: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="social-profiles">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <img className="social-logo" src={link.icon} alt={link.alt} />
          </a>
        ))}
      </div>
      <p>CODED WITH ❤️ BY SHUBHAM</p>
    </footer>
  );
};

export default Footer;
