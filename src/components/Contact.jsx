import React from "react";
import githubIcon from "../assets/images/social/github.svg";
import linkedinIcon from "../assets/images/social/linkedin.svg";
import telegramIcon from "../assets/images/social/telegram.svg";
import gmailicon from "../assets/images/social/gmail.svg";
import whatsappIcon from "../assets/images/social/whatsapp.svg";

// Icons from https://www.iconfinder.com/

function Contact() {
  const contacts = [
    {
      name: "Email",
      href: "mailto:shubhamraw123@gmail.com",
      icon: gmailicon,
      text: "shubhamraw123@gmail.com",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shubham-rawat-63958416a",
      icon: linkedinIcon,
      text: "linkedin.com/in/shubham-rawat-63958416a",
    },
    {
      name: "GitHub",
      href: "https://github.com/Shubhamrawat5",
      icon: githubIcon,
      text: "github.com/Shubhamrawat5",
    },
    {
      name: "Telegram",
      href: "https://t.me/KryptonPVX",
      icon: telegramIcon,
      text: "@KryptonPVX",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919353804615",
      icon: whatsappIcon,
      text: "+91 9353804615",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-gray-900 text-gray-100 flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      {/* Header */}
      <h2 className="text-3xl font-semibold border-b-2 border-gray-100 mb-10">
        &#60; Contact Me / &#62;
      </h2>

      {/* Short intro text */}
      <p className="text-gray-300 max-w-xl mb-8 text-base sm:text-sm leading-relaxed">
        Have an idea, project, or collaboration in mind? Let’s connect and bring
        it to life. You can reach me directly at the links below.
      </p>

      {/* Contact list */}
      <div className="space-y-5 w-full max-w-lg">
        {contacts.map(({ name, href, icon, text }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 
            rounded-md py-3 px-5 transition-all duration-200 text-gray-200 
            hover:text-blue-400 cursor-pointer text-base sm:text-sm"
          >
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-6 h-6 opacity-90"
            />
            <span className="truncate">{text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
