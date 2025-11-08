import React from "react";
import dp from "../assets/images/shubham.jpg";
import telegramIcon from "../assets/images/social/telegram.svg";
import githubIcon from "../assets/images/social/github.svg";
import instagramIcon from "../assets/images/social/insta.png";
import linkedinIcon from "../assets/images/social/linkedin.svg";

function Header() {
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
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-center overflow-hidden px-6 py-10"
    >
      {/* Profile Picture */}
      <div className="relative mb-6 mt-12 sm:mt-10">
        <img
          src={dp}
          alt="Shubham Rawat"
          className="w-44 sm:w-40 rounded-full object-cover shadow-lg ring-2 ring-white"
        />
      </div>

      {/* Name & Role */}
      <div className="text-gray-100 max-w-xl w-full">
        <h1 className="text-4xl sm:text-3xl font-poppins font-semibold leading-tight">
          Hi, I'm <span className="text-blue-400">Shubham Rawat</span>
        </h1>

        {/* Subtitle (wraps gracefully on smaller screens) */}
        <h2 className="text-lg sm:text-base text-gray-300 mt-2 font-light break-words">
          Full Stack Developer | Open Source Contributor | Tech Enthusiast
        </h2>

        <p className="mt-4 text-gray-400 text-base sm:text-sm leading-relaxed mx-auto max-w-md">
          Passionate about building scalable web apps and automation tools that
          solve real-world problems. I love working with modern web technologies
          and exploring new ideas in the tech space.
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center flex-wrap gap-5 sm:gap-4">
        {socials.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-10 h-10 sm:w-9 sm:h-9 opacity-90 hover:opacity-100"
            />
          </a>
        ))}
      </div>

      {/* Scroll Indicator — hidden on small screens */}
      <div className="absolute bottom-4 text-gray-500 text-xs tracking-widest uppercase hidden sm:block">
        &lt; Scroll Down /&gt;
      </div>
    </header>
  );
}

export default Header;
