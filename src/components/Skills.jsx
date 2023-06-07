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
} from "./icons";

function Skills() {
  const languages = [
    { name: "C++", img: cppImg },
    { name: "C Lang", img: cImg },
    { name: "Python", img: pythonImg },
  ];

  const webs = [
    { name: "Html5", img: htmlImg },
    { name: "Css3", img: cssImg },
    { name: "Java Script", img: javascriptImg },
    { name: "Node js", img: nodeImg },
    { name: "React js", img: reactImg },
    { name: "Typescript", img: typescriptImg },
  ];

  const others = [
    { name: "Git", img: gitImg },
    { name: "Github", img: githubImg },
    { name: "MySQL", img: mysqlImg },
    { name: "Mongo DB", img: mongodbImg },
    { name: "Firebase", img: firebaseImg },
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
              <img src={language.img} alt={language.name} />
              <p className="skill-name">{language.name}</p>
            </div>
          ))}
        </div>

        <div className="skill-web sk-par-con" data-aos="fade">
          <h4>Web :</h4>
          {webs.map((web) => (
            <div>
              <img src={web.img} alt={web.name} />
              <p className="skill-name">{web.name}</p>
            </div>
          ))}
        </div>

        <div className="skill-other sk-par-con" data-aos="fade">
          <h4>Others :</h4>
          {others.map((other) => (
            <div>
              <img src={other.img} alt={other.name} />
              <p className="skill-name">{other.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
