import {
  cImg,
  cppImg,
  cssImg,
  firebaseImg,
  gitImg,
  githubImg,
  htmlImg,
  javascriptImg,
  mongodbImg,
  mysqlImg,
  nodeImg,
  pythonImg,
  reactImg,
  typescriptImg,
  nextjsImg,
  tailwindcssImg,
} from "../utils/icons";

function Skills() {
  const languages = [
    { name: "C++", img: cppImg, filter: false },
    { name: "C Lang", img: cImg, filter: false },
    { name: "Python", img: pythonImg, filter: false },
  ];

  const webs = [
    { name: "Html5", img: htmlImg, filter: false },
    { name: "Css3", img: cssImg, filter: false },
    { name: "Java Script", img: javascriptImg, filter: false },
    { name: "Node js", img: nodeImg, filter: false },
    { name: "React js", img: reactImg, filter: false },
    { name: "Next js", img: nextjsImg, filter: true },
    { name: "Tailwind css", img: tailwindcssImg, filter: false },
    { name: "Typescript", img: typescriptImg, filter: false },
  ];

  const others = [
    { name: "Git", img: gitImg, filter: false },
    { name: "Github", img: githubImg, filter: true },
    { name: "MySQL", img: mysqlImg, filter: false },
    { name: "Mongo DB", img: mongodbImg, filter: false },
    { name: "Firebase", img: firebaseImg, filter: false },
  ];

  return (
    <section id="skills">
      <div>
        <h2 className="section-heading">&#60; SKILLS / &#62;</h2>
      </div>

      <div className="skill-container">
        <div className="skill-language sk-par-con" data-aos="fade">
          <h4>Language :</h4>

          {languages.map((language) => (
            <div>
              <img
                src={language.img}
                alt={language.name}
                style={{ filter: language.filter ? `invert(1)` : "none" }}
              />
              <p className="skill-name">{language.name}</p>
            </div>
          ))}
        </div>

        <div className="skill-web sk-par-con" data-aos="fade">
          <h4>Web :</h4>
          {webs.map((web) => (
            <div>
              <img
                src={web.img}
                alt={web.name}
                style={{ filter: web.filter ? `invert(1)` : "none" }}
              />
              <p className="skill-name">{web.name}</p>
            </div>
          ))}
        </div>

        <div className="skill-other sk-par-con" data-aos="fade">
          <h4>Others :</h4>
          {others.map((other) => (
            <div>
              <img
                src={other.img}
                alt={other.name}
                style={{ filter: other.filter ? `invert(1)` : "none" }}
              />
              <p className="skill-name">{other.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
