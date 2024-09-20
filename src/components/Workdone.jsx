import firebaseImg from "../assets/images/skill/firebase.png";
import medihomeImg from "../assets/images/projects/medihome.jpg";
import portfolioImg from "../assets/images/projects/portfolio.png";
import newsImg from "../assets/images/projects/news.png";
import pvxwebImg from "../assets/images/pxvwebsite.png";
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
} from "../utils/icons";

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
        { name: "nodejs", img: nodeImg },
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
        { name: "reactjs", img: reactImg },
        { name: "nodejs", img: nodeImg },
        { name: "mongodb", img: mongodbImg },
      ],
    },
    // {
    //   name: "Yin Yang Photography",
    //   github: "https://github.com/Shubhamrawat5/",
    //   website: "https://yinyangphotography.netlify.app/",
    //   img: "https://i.ibb.co/M1d3Mty/Screenshot-2023-03-25-221322.png",
    //   desc: "This project is a React-based website for a photography startup. It showcases the photographer's details, such as his biography, portfolio of work, and contact information.",
    //   tools: [
    //     { name: "html", img: htmlImg },
    //     { name: "css", img: cssImg },
    //     { name: "reactjs", img: reactImg },
    //   ],
    // },
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
        { name: "reactjs", img: reactImg },
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
        { name: "nodejs", img: nodeImg },
      ],
    },
    {
      name: "Spotify Playlist Downloader",
      github: "https://github.com/Shubhamrawat5/spotify-playlist-downloader",
      website: "https://github.com/Shubhamrawat5/spotify-playlist-downloader",
      img: "https://i.ibb.co/ScGmnj3/download-spotify-to-mp3.png",
      // desc: "A command line tool to download your favourite Spotify playlist in mp3 format. It extracts all songs from your playlist by chromium automation and then download.",
      desc: "This is a command line tool that makes downloading your favourite Spotify playlists easy! It quickly and easily downloads songs in mp3 format, extracting all songs from your chosen playlist and then automatically downloading them one by one.",
      tools: [{ name: "nodejs", img: nodeImg }],
    },
    {
      name: "News-api",
      github: "https://github.com/Shubhamrawat5/news-api",
      website: "https://news-pvx.onrender.com/",
      img: newsImg,
      // desc: "A Public news api which extract and give news from popular 10-12 news websites. It refresh after every 3 hours (8 times a day). Feel free to use this news-api.",
      desc: "This project provides a public news API that extracts and delivers news headline from 10-12 of the most popular news websites, refreshing 8 times a day every 3 hours. Utilize this news-api to stay up to date on the latest developments across tech.",
      tools: [{ name: "nodejs", img: nodeImg }],
    },
    {
      name: "Portfolio",
      github: "https://github.com/Shubhamrawat5/Shubhamrawat5.github.io",
      website: "https://Shubhamrawat5.github.io",
      img: portfolioImg,
      // desc: "A React Js based portfolio to show all info about myself like about, places, education, social-profiles, skills, work-done, contact, etc. It is the page which is you currently looking at.",
      desc: "This site is a React JS-based portfolio showcasing my personal data and professional background, including information about me, my education, skills, past projects and contact information. It is a one-stop destination for discovering all of the relevant details about me.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "reactjs", img: reactImg },
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
        { name: "nodejs", img: nodeImg },
        { name: "python", img: pythonImg },
      ],
    },
    {
      name: "Tasker",
      github: "https://github.com/Shubhamrawat5/Tasker",
      website: "https://tasker-4tep.onrender.com/",
      img: "https://camo.githubusercontent.com/24f779be782b5cb45297416aee1a8ef2eed21767f1ade2be8716a63525ee1d8c/68747470733a2f2f692e6962622e636f2f644c6b584339792f7461736b312e706e67",
      // desc: "A Todo web app which save all your todos (or messages) by giving a unique username. It save all your data in database, so you can see all your previous saved data anytime.",
      desc: "This is a user-friendly web application that allow users to store all their tasks or reminders under a unique username. Data is safely stored in a database, that allow users with quick and easy access to previously saved information at any time anywhere.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "nodejs", img: nodeImg },
        { name: "mongodb", img: mongodbImg },
      ],
    },
    {
      name: "Custom Link Maker",
      github: "https://github.com/Shubhamrawat5/Custom-Link-Maker",
      website: "https://link-maker-pvx.onrender.com/",
      img: "https://camo.githubusercontent.com/e8227892c98ed1b2c6a53433298b63d4e455c69e86c3de73534513f34565aff2/68747470733a2f2f692e6962622e636f2f56576b745a35482f6c696e6b31312e706e67",
      // desc: "A web app to change any url to your custom given url name, which will automatically redirect to original url when opened. It can be helpful to make short urls of bigger url links.",
      desc: "This web application is a link shortener that allow users to create custom, shorter names for any URL. When opened, these new links will automatically redirect to the original URL, making it easier to remember and share longer links. It stores URL info in the database",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "nodejs", img: nodeImg },
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
        { name: "js", img: javascriptImg },
      ],
    },
    {
      name: "Simon Color Game",
      github: "https://github.com/Shubhamrawat5/simon-color-game",
      website: "https://shubhamrawat5.github.io/simon-color-game/",
      img: "https://camo.githubusercontent.com/3daff2e47d778349cda167127b3b60a5588ed9fe8615025559808745a6802071/68747470733a2f2f692e6962622e636f2f34544e546b42422f436170747572737373652e706e67",
      // desc: "A web game in which you have to remember and follow the pattern in which the color buttons are pressed. After every right answer pattern length is increase by 1.",
      desc: "This is a web game that test your memory to the limit. Follow a sequence of colored buttons and remember their pattern. Repeat the pattern to win. With each correct answer, the pattern length will increase by 1, leading you through increasingly difficult levels.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "js", img: javascriptImg },
      ],
    },
    {
      name: "Rock Paper Scissors",
      github: "https://github.com/Shubhamrawat5/Rock-Paper-Scissors-Game",
      website: "https://shubhamrawat5.github.io/Rock-Paper-Scissors-Game/",
      img: "https://camo.githubusercontent.com/d581433fd098676198cb4faa018ab78225f342d3318735eb485a7e0046068a65/68747470733a2f2f692e6962622e636f2f4272534b5468542f7270732d436170747572652e706e67",
      // desc: "A web game of well known Rock, Paper and Scissors. Rock beat Scissor, Scissor beat Paper, Paper beat Rock. Increase your score by winning against bot. Win +1, Loss -1 (point).",
      desc: " This is a web game of classic Rock, Paper and Scissors. Compete against the computer opponent and increase your score by winning rounds. You'll earn 1 point for each victory and lose 1 point for each defeat. Enjoy the challenge and test your luck.",
      tools: [
        { name: "html", img: htmlImg },
        { name: "css", img: cssImg },
        { name: "js", img: javascriptImg },
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
