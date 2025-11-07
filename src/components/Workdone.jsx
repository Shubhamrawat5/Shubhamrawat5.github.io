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
import medihomeImg from "../assets/images/projects/medihome.jpg";
import portfolioImg from "../assets/images/projects/portfolio.png";
import newsImg from "../assets/images/projects/news.png";
import pvxwebImg from "../assets/images/pxvwebsite.png";

function Workdone() {
  const works = [
    {
      name: "TeleNews",
      github: "https://github.com/Shubhamrawat5/TeleNews",
      website: "https://github.com/Shubhamrawat5/TeleNews",
      img: "https://i.ibb.co/kkJyt9b/image.png",
      desc: "This project focuses on creating a Telegram bot that will automatically post tech news to your Telegram channel. It gathers headlines from popular news sources such as NDTV-Gadgets, Beebom, and inshorts, providing you with the latest info in the technology world.",
      tools: [{ name: "Python", img: pythonImg }],
    },
    {
      name: "Whatsapp Bot",
      github: "https://github.com/Shubhamrawat5/whatsapp-bot-md",
      website: "https://shubhamrawat5.github.io/whatsapp-bot-md/",
      img: "https://i.ibb.co/G3Ph5sY/1-Aca-JFd-Mf-Pux-d0-YEl9cprw.png",
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
      img: "https://i.ibb.co/TL9gn5z/apple2131.png",
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
      img: "https://i.ibb.co/ScGmnj3/download-spotify-to-mp3.png",
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
      img: "https://i.ibb.co/CJDQhK8/3.png",
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
      img: "https://i.ibb.co/x8YHdHC3/image.png",
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
      img: "https://i.ibb.co/gMrCRtQX/image.png",
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
      img: "https://i.ibb.co/jv5dk68/frontend.png",
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
      img: "https://i.ibb.co/m5bQLdgs/Screenshot-2025-11-08-002137.png",
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
      img: "https://i.ibb.co/cc62H23V/Screenshot-2025-11-08-002435.png",
      desc: "This is a web game of classic Rock, Paper and Scissors. Compete against the computer opponent and increase your score by winning rounds. You'll earn 1 point for each victory and lose 1 point for each defeat. Enjoy the challenge and test your luck.",
      tools: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "JavaScript", img: javascriptImg },
      ],
    },
  ];

  return (
    <section id="workdone">
      <div>
        <h2 className="section-heading">&#60; Projects / &#62;</h2>
      </div>
      <div className="work-done">
        {works.map((work, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={work.website}
          >
            <div data-aos="fade-up" className="work-box">
              <img className="work-img" src={work.img} alt="project-img" />
              <h3>{work.name}</h3>
              <p className="work-info">{work.desc}</p>
              <div className="work-used">
                {work.tools.map((tool, index) => (
                  <img key={index} src={tool.img} alt={tool.name} />
                ))}
              </div>
              <a target="_blank" rel="noopener noreferrer" href={work.github}>
                <div className="work-github">
                  <img src={githubImg} alt="github" />
                </div>
              </a>
            </div>
          </a>
        ))}

        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shubhamrawat5.github.io/TheACE/index.html"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/yPS1f8N/ace.png"
              alt="project-img"
            />
            <h3>TheACE webpage</h3>
            <p className="work-info">
              A web page of TheACE. TheACE is a E-Sports organization formed by
              4 core members and currently with 30+ members. Page show info
              about clan, members, photos and contact details.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="html" />
              <img src={cssImg} alt="css" />
              <img src={jsImg} alt="js" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/TheACE"
            >
              <div className="work-github">
                <img src={githubImg} alt="github" />
              </div>
            </a>
          </div>
        </a> */}
      </div>
    </section>
  );
}

export default Workdone;
