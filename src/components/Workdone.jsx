import pythonImg from "../asserts/images/skill/python.png";
import htmlImg from "../asserts/images/skill/html.png";
import cssImg from "../asserts/images/skill/css.png";
import jsImg from "../asserts/images/skill/javascript.png";
import nodejsImg from "../asserts/images/skill/nodejs3.png";
import reactjsImg from "../asserts/images/skill/react.png";
import githubImg from "../asserts/images/skill/github2.png";
import mongodbImg from "../asserts/images/skill/mongodb.png";

function Workdone() {
  return (
    <section id="workdone">
      <div>
        <h2 className="section-heading">&#60; Work Done / &#62;</h2>
      </div>
      <div className="work-done">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/NITESH-8/Sentimental-Analysis-of-Product-and-Movie-Review-System"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/CJDQhK8/3.png"
              alt=""
            />
            <h3>Product and Movie Review System</h3>
            <p className="work-info">
              A project of "Sentimental Analysis of Product and Movie Review
              System". It shows the positivity/negativity about a comment or a
              amazon product. Role was to convert the whole project to a
              interactive web app.
            </p>
            <div className="work-used">
              <img src={pythonImg} alt="" />
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={nodejsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/Sentimental-Analysis-of-Product-and-Movie-Review-System"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Shubhamrawat5/TeleNews"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://user-images.githubusercontent.com/34619485/88335884-a7d4af00-cd51-11ea-8021-75e10a2a53f5.jpg"
              alt=""
            />
            <h3>TeleNews</h3>
            <p className="work-info">
              A tool to create telegram bot which will post tech news to your
              given Telegram channel. It extract news headlines from different
              tech news websites like ndtv-gadgets, beebom, india-today etc.
            </p>
            <div className="work-used">
              <img src={pythonImg} alt="" />
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/TeleNews"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://appleplaylistdownloader.herokuapp.com/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/TL9gn5z/apple2131.png"
              alt=""
            />
            <h3>Apple Music Playlist Downloader</h3>
            <p className="work-info">
              A web app to download your favourite apple music playlist in mp3
              format from a single page. It extracts all songs from your
              playlist and show it in the list.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
              <img src={nodejsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/apple-playlist-downloader-webapp"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Shubhamrawat5/spotify-playlist-downloader"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/ScGmnj3/download-spotify-to-mp3.png"
              alt=""
            />
            <h3>Spotify Playlist Downloader</h3>
            <p className="work-info">
              A command line tool to download your favourite Spotify playlist in
              mp3 format. It extracts all songs from your playlist by chromium
              automation and then download.
            </p>
            <div className="work-used">
              <img src={nodejsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/spotify-playlist-downloader"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://news-pvx.herokuapp.com/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/4s6BW2C/news.png"
              alt=""
            />
            <h3>News-api</h3>
            <p className="work-info">
              A public news api which extract and give news from popular 10-12
              news websites. It refresh after every 3 hours (8 times a day).
              Feel free to use this news-api.
            </p>
            <div className="work-used">
              <img src={nodejsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/news-api"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shubhamrawat5.github.io/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/YQd4Cjv/portfolio.png"
              alt=""
            />
            <h3>Portfolio</h3>
            <p className="work-info">
              A portfolio web page to show all info about myself like about,
              places, education, social-profiles, skills, work done, contact,
              etc. It is the page which is you currently looking at.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/Shubhamrawat5.github.io"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shubhamrawat5.github.io/PVX_webpage/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/84PKvDG/pvxxx.png"
              alt=""
            />
            <h3>PVX webpage</h3>
            <p className="work-info">
              A web page of PVX COMMUNITY. PVX is a whatsapp group with 10+
              groups and 2000+ members. Page show all the information like
              groups list, shared Gdrive info, admins list and Bdays info.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/PVX_webpage"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shubhamrawat5.github.io/TheACE/index.html"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/yPS1f8N/ace.png"
              alt=""
            />
            <h3>TheACE webpage</h3>
            <p className="work-info">
              A web page of TheACE. TheACE is a E-Sports organization formed by
              4 core members and currently with 30+ members. Page show info
              about clan, members, photos and contact details.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/TheACE"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://todo-app-shubh.herokuapp.com/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://camo.githubusercontent.com/c8e1197da20e9ec9ae4dd9d1d97e97301389511e30ceb883851063ad5fcdee93/68747470733a2f2f692e6962622e636f2f644c6b584339792f7461736b312e706e67"
              alt=""
            />
            <h3>Tasker</h3>
            <p className="work-info">
              A todo web app which save all your todos (messages) by giving a
              unique username. It save all your todos in database, so you can
              see all your previous saved todos anytime.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
              <img src={nodejsImg} alt="" />
              <img src={mongodbImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/Tasker"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkkmakerr.herokuapp.com/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://camo.githubusercontent.com/d9e50e5fe7c8d9af7dac1e8e9f7a34e64f755c7fb026d3a02bb7aad6b1b089b6/68747470733a2f2f692e6962622e636f2f56576b745a35482f6c696e6b31312e706e67"
              alt=""
            />
            <h3>Custom Link Maker</h3>
            <p className="work-info">
              A web app to change any url to your custom given url name, which
              will automatically redirect to original url when opened. It can be
              helpful to make short urls of bigger url links.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
              <img src={nodejsImg} alt="" />
              <img src={mongodbImg} alt="" />
            </div>
            <a href="htthttps://github.com/Shubhamrawat5/Custom-Link-Maker">
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shubhamrawat5.github.io/movie-app/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://camo.githubusercontent.com/399fa38568a5c350683b1eae2815e74de7646a6c2953ef3382d064e812dbce23/68747470733a2f2f692e6962622e636f2f766a3532334c732f6d6f7669652e706e67"
              alt=""
            />
            <h3>MOVIE-APP</h3>
            <p className="work-info">
              A react and redux based movie app which show different movies and
              you can add any movie to the favourite section and also search any
              movie title from search bar.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
              <img src={reactjsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/movie-app"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shubhamrawat5.github.io/Frontend-Mentor/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://i.ibb.co/jv5dk68/frontend.png"
              alt=""
            />
            <h3>Frontend Mentor</h3>
            <p className="work-info">
              A list of all the Frontend-mentor challenges done by me.
              Frontend-mentor is a popular websites which gives to create a same
              sample of given challenge on html, css and javascript.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/Frontend-Mentor"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shubhamrawat5.github.io/simon-color-game/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://camo.githubusercontent.com/df11d3f8926ba242ab2a9c56bcb63abf768abf890786a8196cd196755de2dbd2/68747470733a2f2f692e6962622e636f2f34544e546b42422f436170747572737373652e706e67"
              alt=""
            />
            <h3>Simon Color Game</h3>
            <p className="work-info">
              A web game in which you have to remember and follow the pattern in
              which the color buttons are pressed. After every right answer
              pattern length is increase by 1.
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/simon-color-game"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shubhamrawat5.github.io/Rock-Paper-Scissors-Game/"
        >
          <div data-aos="fade-up" className="work-box">
            <img
              className="work-img"
              src="https://camo.githubusercontent.com/ba1140f7dded40968fba12b7359b42961128e8335ed981c0d9e0086b011d2701/68747470733a2f2f692e6962622e636f2f4272534b5468542f7270732d436170747572652e706e67"
              alt=""
            />
            <h3>Rock Paper Scissors</h3>
            <p className="work-info">
              A web game of well known Rock, Paper and Scissors. Rock beat
              Scissor, Scissor beat Paper, Paper beat Rock. Increase your score
              by winning against bot. Win +1, Loss -1 (point)
            </p>
            <div className="work-used">
              <img src={htmlImg} alt="" />
              <img src={cssImg} alt="" />
              <img src={jsImg} alt="" />
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shubhamrawat5/Rock-Paper-Scissors-Game"
            >
              <div className="work-github">
                <img src={githubImg} alt="" />
              </div>
            </a>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Workdone;
