import React from "react";
import {
  cssImg,
  githubImg,
  htmlImg,
  javascriptImg,
  mongodbImg,
  nodeImg,
  postgresqlImg,
  pythonImg,
  reactImg,
  firebaseImg,
} from "../utils/icons";
import telenewsImg from "../assets/images/projects/telenews.png";
import whatsappImg from "../assets/images/projects/whatsapp.png";
import appleImg from "../assets/images/projects/apple.png";
import spotifyImg from "../assets/images/projects/spotify.png";
import sentimentalImg from "../assets/images/projects/sentimental.png";
import taskerImg from "../assets/images/projects/tasker.png";
import linkImg from "../assets/images/projects/link.png";
import frontendImg from "../assets/images/projects/frontend.png";
import simonImg from "../assets/images/projects/simon.png";
import rockImg from "../assets/images/projects/rock.png";
import medihomeImg from "../assets/images/projects/medihome.jpg";
import portfolioImg from "../assets/images/projects/portfolio.png";
import newsImg from "../assets/images/projects/news.png";
import pvxwebImg from "../assets/images/projects/pvxwebsite.png";

function Workdone() {
  const works = [
    {
      name: "TeleNews",
      github: "https://github.com/Shubhamrawat5/TeleNews",
      website: "https://github.com/Shubhamrawat5/TeleNews",
      img: telenewsImg,
      desc: "This project focuses on creating a Telegram bot that will automatically post tech news to your Telegram channel. It gathers headlines from popular news sources such as NDTV-Gadgets, Beebom, and inshorts, providing you with the latest info in the technology world.",
      tools: [{ name: "Python", img: pythonImg }],
    },
    {
      name: "Whatsapp Bot",
      github: "https://github.com/Shubhamrawat5/whatsapp-bot-md",
      website: "https://shubhamrawat5.github.io/whatsapp-bot-md/",
      img: whatsappImg,
      desc: "This project involves the development of a WhatsApp bot that offers various commands such as group management, sticker maker, Instagram YouTube downloader, live cricket scores and much more. Bot has more than 50 commands to offer.",
      tools: [
        { name: "Node.js", img: nodeImg },
        { name: "PostgreSQL", img: postgresqlImg },
      ],
    },
    {
      name: "PVX website",
      github: "https://github.com/Shubhamrawat5/PVX-WEBSITE",
      website: "https://pvxcommunity.com/",
      img: pvxwebImg,
      desc: "This project is the official website for PVX COMMUNITY - a vibrant social community with over 3000 members across 15+ groups. The website will provide users with all the necessary information such as group lists, admins, message stats, birthdays, and more.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "React.js", img: reactImg },
        { name: "Node.js", img: nodeImg },
        { name: "MongoDB", img: mongodbImg },
      ],
    },
    {
      name: "Medi Home",
      github: "https://github.com/Shubhamrawat5/",
      website: "https://medic-home-9aa86.web.app/",
      img: medihomeImg,
      desc: "This project is a React based website for a Startup that enables customers to browse and know available medicines. It leverages Google Firebase platform for authentication, storage and database, as well has an admin dashboard for making changes.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "React.js", img: reactImg },
        { name: "Firebase", img: firebaseImg },
      ],
    },
    {
      name: "Apple Music Playlist Downloader",
      github:
        "https://github.com/Shubhamrawat5/apple-playlist-downloader-webapp",
      website: "https://apple-playlist-downloader-pvx.onrender.com/",
      img: appleImg,
      desc: "This web app provides an easy way to download Apple Music playlists in MP3 format. With one click, you can extract all songs from your playlist and view them in a single list. Download all your favorite music faster and easier than ever before.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "Node.js", img: nodeImg },
      ],
    },
    {
      name: "Spotify Playlist Downloader",
      github: "https://github.com/Shubhamrawat5/spotify-playlist-downloader",
      website: "https://github.com/Shubhamrawat5/spotify-playlist-downloader",
      img: spotifyImg,
      desc: "This is a command line tool that makes downloading your favourite Spotify playlists easy! It quickly and easily downloads songs in mp3 format, extracting all songs from your chosen playlist and then automatically downloading them one by one.",
      tools: [{ name: "Node.js", img: nodeImg }],
    },
    {
      name: "News-api",
      github: "https://github.com/Shubhamrawat5/news-api",
      website: "https://news-pvx.onrender.com/",
      img: newsImg,
      desc: "This project provides a public news API that extracts and delivers news headline from 10-12 of the most popular news websites, refreshing 8 times a day every 3 hours. Utilize this news-api to stay up to date on the latest developments across tech.",
      tools: [{ name: "Node.js", img: nodeImg }],
    },
    {
      name: "Portfolio",
      github: "https://github.com/Shubhamrawat5/Shubhamrawat5.github.io",
      website: "https://Shubhamrawat5.github.io",
      img: portfolioImg,
      desc: "This site is a React JS-based portfolio showcasing my personal data and professional background, including information about me, my education, skills, past projects and contact information. It is a one-stop destination for discovering all of the relevant details about me.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "React.js", img: reactImg },
      ],
    },
    {
      name: "Product and Movie Review System",
      github:
        "https://github.com/Shubhamrawat5/Sentimental-Analysis-of-Product-and-Movie-Review-System",
      website:
        "https://github.com/Shubhamrawat5/Sentimental-Analysis-of-Product-and-Movie-Review-System",
      img: sentimentalImg,
      desc: "This project involves the development of a Sentiment Analysis System for Product Reviews. The system will use ML to detect positivity or negativity from customer reviews of Amazon products. My work includes converting the system into an interactive web application.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "Node.js", img: nodeImg },
        { name: "Python", img: pythonImg },
      ],
    },
    {
      name: "Tasker",
      github: "https://github.com/Shubhamrawat5/Tasker",
      website: "https://tasker-4tep.onrender.com/",
      img: taskerImg,
      desc: "This is a user-friendly web application that allow users to store all their tasks or reminders under a unique username. Data is safely stored in a database, that allow users with quick and easy access to previously saved information at any time anywhere.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "Node.js", img: nodeImg },
        { name: "MongoDB", img: mongodbImg },
      ],
    },
    {
      name: "Custom Link Maker",
      github: "https://github.com/Shubhamrawat5/Custom-Link-Maker",
      website: "https://link-maker-pvx.onrender.com/",
      img: linkImg,
      desc: "This web application is a link shortener that allow users to create custom, shorter names for any URL. When opened, these new links will automatically redirect to the original URL, making it easier to remember and share longer links. It stores URL info in the database",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "Node.js", img: nodeImg },
        { name: "MongoDB", img: mongodbImg },
      ],
    },
    {
      name: "Frontend Mentor",
      github: "https://github.com/Shubhamrawat5/Frontend-Mentor",
      website: "https://shubhamrawat5.github.io/Frontend-Mentor/",
      img: frontendImg,
      desc: "This is a webpage having a range of Frontend-mentor challenges that I've completed, using HTML, CSS and JavaScript. These challenges have helped me in sharpen my coding skills and developing my knowledge of frontend web development.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "JavaScript", img: javascriptImg },
      ],
    },
    {
      name: "Simon Color Game",
      github: "https://github.com/Shubhamrawat5/simon-color-game",
      website: "https://shubhamrawat5.github.io/simon-color-game/",
      img: simonImg,
      desc: "This is a web game that test your memory to the limit. Follow a sequence of colored buttons and remember their pattern. Repeat the pattern to win. With each correct answer, the pattern length will increase by 1, leading you through increasingly difficult levels.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "JavaScript", img: javascriptImg },
      ],
    },
    {
      name: "Rock Paper Scissors",
      github: "https://github.com/Shubhamrawat5/Rock-Paper-Scissors-Game",
      website: "https://shubhamrawat5.github.io/Rock-Paper-Scissors-Game/",
      img: rockImg,
      desc: "This is a web game of classic Rock, Paper and Scissors. Compete against the computer opponent and increase your score by winning rounds. You'll earn 1 point for each victory and lose 1 point for each defeat. Enjoy the challenge and test your luck.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "JavaScript", img: javascriptImg },
      ],
    },
  ];

  return (
    <section
      id="workdone"
      className="bg-gray-900 text-gray-100 flex flex-col items-center py-12 px-6 min-h-screen"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold border-b-2 border-gray-100 mb-10">
        &#60; PROJECTS / &#62;
      </h2>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full">
        {works.map((work, index) => (
          <div
            key={index}
            className="relative bg-gray-800 border border-gray-700 rounded-lg shadow-md 
      overflow-hidden hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300 
      w-full sm:w-80 md:w-90"
          >
            {/* Image */}
            <a
              href={work.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden"
            >
              <img
                src={work.img}
                alt={work.name}
                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold bg-blue-500 text-white px-3 py-1 inline-block rounded-br-md mt-2 ml-2">
                {work.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 px-4 py-3">{work.desc}</p>
            </a>

            {/* Tools */}
            <div className="flex flex-wrap items-center gap-2 px-4 pb-4">
              {work.tools.map((tool, i) => (
                <img
                  key={i}
                  src={tool.img}
                  alt={tool.name}
                  className="w-9 h-9"
                />
              ))}
            </div>

            {/* GitHub Ribbon */}
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 -right-18 w-48 h-12 bg-blue-500 rotate-45 
  flex items-center justify-center"
            >
              <img
                src={githubImg}
                alt="GitHub"
                className="w-10 h-10 rounded-full bg-white opacity-80 transition-transform duration-300 hover:-rotate-45"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Workdone;
