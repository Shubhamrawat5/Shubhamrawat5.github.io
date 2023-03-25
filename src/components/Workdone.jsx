import pythonImg from "../asserts/images/skill/python.png";
import postgresqlImg from "../asserts/images/skill/postgresql.png";
import htmlImg from "../asserts/images/skill/html.png";
import cssImg from "../asserts/images/skill/css.png";
import jsImg from "../asserts/images/skill/javascript.png";
import nodejsImg from "../asserts/images/skill/nodejs3.png";
import reactjsImg from "../asserts/images/skill/react.png";
import githubImg from "../asserts/images/skill/github2.png";
import mongodbImg from "../asserts/images/skill/mongodb.png";
import firebaseImg from "../asserts/images/skill/firebase.png";
import medihomeImg from "../asserts/images/projects/medihome.jpg";
import portfolioImg from "../asserts/images/projects/portfolio.png";
import newsImg from "../asserts/images/projects/news.png";
import pvxwebImg from "../asserts/images/pxvwebsite.png";

function Workdone() {
  const works = [
    {
      name: "TeleNews",
      github: "https://github.com/Shubhamrawat5/TeleNews",
      website: "https://github.com/Shubhamrawat5/TeleNews",
      img: "https://user-images.githubusercontent.com/34619485/88335884-a7d4af00-cd51-11ea-8021-75e10a2a53f5.jpg",
      // desc: "A Tool to create Telegram bot which will post tech news to your given Telegram channel. It extract news headlines from different news websites like ndtv-gadgets, beebom, india-today etc.",
      desc: "This project focuses on creating a Telegram bot that will automatically post tech news to your Telegram channel. It gathers headlines from popular news sources such as NDTV-Gadgets, Beebom, and inshorts, providing you with the latest info in the technology world.",
      tools: [{ name: "python", img: pythonImg }],
    },
    {
      name: "Whatsapp Bot",
      github: "https://github.com/Shubhamrawat5/whatsapp-bot-md",
      website: "https://shubhamrawat5.github.io/whatsapp-bot-md/",
      img: "https://i.ibb.co/G3Ph5sY/1-Aca-JFd-Mf-Pux-d0-YEl9cprw.png",
      // desc: "It has various functions like group management, sticker maker, insta downloader, youtube downloader, cricket scores, voting system and many more.",
      desc: "This project involves the development of a WhatsApp bot that offers various commands such as group management, sticker maker, Instagram YouTube downloader, live cricket scores and much more. Bot has more than 50 commands to offer.",
      tools: [
        { name: "nodejs", img: nodejsImg },
      { name: "postgresql", img: postgresqlImg },
      ],
    },
    {
      name: "PVX website",
      github: "https://github.com/Shubhamrawat5/PVX-WEBSITE",
      website: "https://pvxcommunity.com/",
      img: pvxwebImg,
      // desc: "Website for PVX COMMUNITY. PVX is a 15+ groups and 3000+ members community. Website shows all the information like Groups list, Stats, Admins, Bdays etc.",
      desc: "This project is the official website for PVX COMMUNITY - a vibrant social community with over 3000 members across 15+ groups. The website will provide users with all the necessary information such as group lists, admins, message stats, birthdays, and more.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "reactjs", img: reactjsImg },
        { name: "nodejs", img: nodejsImg },
        { name: "mongodb", img: mongodbImg },
      ],
    },
    {
      name: "Medi Home",
      github: "https://github.com/Shubhamrawat5/",
      website: "https://medic-home-9aa86.web.app/",
      img: medihomeImg,
      // desc: "A React based website for a Startup to show available medicines and used Google platform Firebase for authentication, storage and database. Also made admin dashboard for making changes.",
      desc: "This project is a React based website for a Startup that enables customers to browse and know available medicines. It leverages Google Firebase platform for authentication, storage and database, as well has an admin dashboard for making changes.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "reactjs", img: reactjsImg },
        { name: "firebase", img: firebaseImg },
      ],
    },
    {
      name: "Apple Music Playlist Downloader",
      github:
        "https://github.com/Shubhamrawat5/apple-playlist-downloader-webapp",
      website: "https://apple-playlist-downloader-pvx.onrender.com/",
      img: "https://i.ibb.co/TL9gn5z/apple2131.png",
      // desc: "A web app to download your favourite Apple music playlist in mp3 format from a single page. It extracts all songs from your playlist and show it in the list.",
      desc: "This web app provides an easy way to download Apple Music playlists in MP3 format. With one click, you can extract all songs from your playlist and view them in a single list. Download all your favorite music faster and easier than ever before.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "nodejs", img: nodejsImg },
      ],
    },
    {
      name: "Spotify Playlist Downloader",
      github: "https://github.com/Shubhamrawat5/spotify-playlist-downloader",
      website: "https://github.com/Shubhamrawat5/spotify-playlist-downloader",
      img: "https://i.ibb.co/ScGmnj3/download-spotify-to-mp3.png",
      // desc: "A command line tool to download your favourite Spotify playlist in mp3 format. It extracts all songs from your playlist by chromium automation and then download.",
      desc: "This is a command line tool that makes downloading your favourite Spotify playlists easy! It quickly and easily downloads songs in mp3 format, extracting all songs from your chosen playlist and then automatically downloading them one by one.",
      tools: [{ name: "nodejs", img: nodejsImg }],
    },
    {
      name: "News-api",
      github: "https://github.com/Shubhamrawat5/news-api",
      website: "https://news-pvx.onrender.com/",
      img: newsImg,
      // desc: "A Public news api which extract and give news from popular 10-12 news websites. It refresh after every 3 hours (8 times a day). Feel free to use this news-api.",
      desc: "This project provides a public news API that extracts and delivers news headline from 10-12 of the most popular news websites, refreshing 8 times a day every 3 hours. Utilize this news-api to stay up to date on the latest developments across tech.",
      tools: [{ name: "nodejs", img: nodejsImg }],
    },
    {
      name: "Portfolio",
      github: "https://github.com/Shubhamrawat5/news-api",
      website: "https://github.com/Shubhamrawat5/Shubhamrawat5.github.io",
      img: portfolioImg,
      // desc: "A React Js based portfolio to show all info about myself like about, places, education, social-profiles, skills, work-done, contact, etc. It is the page which is you currently looking at.",
      desc: "This site is a React JS-based portfolio showcasing my personal data and professional background, including information about me, my education, skills, past projects and contact information. It is a one-stop destination for discovering all of the relevant details about me.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "reactjs", img: reactjsImg },
      ],
    },
    {
      name: "Product and Movie Review System",
      github:
        "https://github.com/Shubhamrawat5/Sentimental-Analysis-of-Product-and-Movie-Review-System",
      website:
        "https://github.com/Shubhamrawat5/Sentimental-Analysis-of-Product-and-Movie-Review-System",
      img: "https://i.ibb.co/CJDQhK8/3.png",
      // desc: "A project of Sentimental Analysis of Product and Movie Review System. It shows the positivity/negativity about a comment or a amazon product. Role was to convert the whole project to a interactive web app.",
      desc: "This project involves the development of a Sentiment Analysis System for Product Reviews. The system will use ML to detect positivity or negativity from customer reviews of Amazon products. My work includes converting the system into an interactive web application.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "nodejs", img: nodejsImg },
        { name: "python", img: pythonImg },
      ],
    },
    {
      name: "Tasker",
      github: "https://github.com/Shubhamrawat5/Tasker",
      website: "https://tasker-4tep.onrender.com/",
      img: "https://camo.githubusercontent.com/c8e1197da20e9ec9ae4dd9d1d97e97301389511e30ceb883851063ad5fcdee93/68747470733a2f2f692e6962622e636f2f644c6b584339792f7461736b312e706e67",
      // desc: "A Todo web app which save all your todos (or messages) by giving a unique username. It save all your data in database, so you can see all your previous saved data anytime.",
      desc: "This is a user-friendly web application that allow users to store all their tasks or reminders under a unique username. Data is safely stored in a database, that allow users with quick and easy access to previously saved information at any time anywhere.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "nodejs", img: nodejsImg },
        { name: "mongodb", img: mongodbImg },
      ],
    },
    {
      name: "Custom Link Maker",
      github: "https://github.com/Shubhamrawat5/Custom-Link-Maker",
      website: "https://link-maker-pvx.onrender.com/",
      img: "https://camo.githubusercontent.com/d9e50e5fe7c8d9af7dac1e8e9f7a34e64f755c7fb026d3a02bb7aad6b1b089b6/68747470733a2f2f692e6962622e636f2f56576b745a35482f6c696e6b31312e706e67",
      // desc: "A web app to change any url to your custom given url name, which will automatically redirect to original url when opened. It can be helpful to make short urls of bigger url links.",
      desc: "This web application is a link shortener that allow users to create custom, shorter names for any URL. When opened, these new links will automatically redirect to the original URL, making it easier to remember and share longer links. It stores URL info in the database",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "nodejs", img: nodejsImg },
        { name: "mongodb", img: mongodbImg },
      ],
    },
    {
      name: "Frontend Mentor",
      github: "https://github.com/Shubhamrawat5/Frontend-Mentor",
      website: "https://shubhamrawat5.github.io/Frontend-Mentor/",
      img: "https://i.ibb.co/jv5dk68/frontend.png",
      // desc: "A list of all the Frontend-mentor challenges done by me. Frontend-mentor is a popular websites which gives to create a same sample of given challenge on html, css and javascript.",
      desc: "This is a webpage having a range of Frontend-mentor challenges that I've completed, using HTML, CSS and JavaScript. These challenges have helped me in sharpen my coding skills and developing my knowledge of frontend web development.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "js", img: jsImg },
      ],
    },
    {
      name: "Simon Color Game",
      github: "https://github.com/Shubhamrawat5/simon-color-game",
      website: "https://shubhamrawat5.github.io/simon-color-game/",
      img: "https://camo.githubusercontent.com/df11d3f8926ba242ab2a9c56bcb63abf768abf890786a8196cd196755de2dbd2/68747470733a2f2f692e6962622e636f2f34544e546b42422f436170747572737373652e706e67",
      // desc: "A web game in which you have to remember and follow the pattern in which the color buttons are pressed. After every right answer pattern length is increase by 1.",
      desc: "This is a web game that test your memory to the limit. Follow a sequence of colored buttons and remember their pattern. Repeat the pattern to win. With each correct answer, the pattern length will increase by 1, leading you through increasingly difficult levels.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "js", img: jsImg },
      ],
    },
    {
      name: "Rock Paper Scissors",
      github: "https://github.com/Shubhamrawat5/Rock-Paper-Scissors-Game",
      website: "https://shubhamrawat5.github.io/Rock-Paper-Scissors-Game/",
      img: "https://camo.githubusercontent.com/ba1140f7dded40968fba12b7359b42961128e8335ed981c0d9e0086b011d2701/68747470733a2f2f692e6962622e636f2f4272534b5468542f7270732d436170747572652e706e67",
      // desc: "A web game of well known Rock, Paper and Scissors. Rock beat Scissor, Scissor beat Paper, Paper beat Rock. Increase your score by winning against bot. Win +1, Loss -1 (point).",
      desc: " This is a web game of classic Rock, Paper and Scissors. Compete against the computer opponent and increase your score by winning rounds. You'll earn 1 point for each victory and lose 1 point for each defeat. Enjoy the challenge and test your luck.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "js", img: jsImg },
      ],
    },
  ];

  return (
    <section id="workdone">
      <div>
        <h2 className="section-heading">&#60; Work Done / &#62;</h2>
      </div>
      <div className="work-done">
        {works.map((work) => {
          return (
            <a target="_blank" rel="noopener noreferrer" href={work.website}>
              <div data-aos="fade-up" className="work-box">
                <img className="work-img" src={work.img} alt="project-img" />
                <h3>{work.name}</h3>
                <p className="work-info">{work.desc}</p>
                <div className="work-used">
                  {work.tools.map((tool) => {
                    return <img src={tool.img} alt={tool.name} />;
                  })}
                </div>

                <a target="_blank" rel="noopener noreferrer" href={work.github}>
                  <div className="work-github">
                    <img src={githubImg} alt="github" />
                  </div>
                </a>
              </div>
            </a>
          );
        })}

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
