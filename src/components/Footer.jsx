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
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shubham-rawat-63958416a",
    icon: linkedinIcon,
  },
  {
    name: "Telegram",
    url: "https://t.me/KryptonPVX",
    icon: telegramIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shubhamm.rawatt",
    icon: instagramIcon,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 px-4 text-center">
      {/* Social Links */}
      <div className="flex justify-center flex-wrap gap-3 mb-3">
        {socialLinks.map(({ name, url, icon }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="inline-block hover:scale-110 transition-transform duration-200"
          >
            <img src={icon} alt={`${name} icon`} className="w-8 h-8" />
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-sm sm:text-base font-medium tracking-wide text-gray-400">
        CODED WITH <span className="text-red-500">❤️</span> BY{" "}
        <span className="text-gray-200">SHUBHAM</span>
      </p>
    </footer>
  );
};

export default Footer;
