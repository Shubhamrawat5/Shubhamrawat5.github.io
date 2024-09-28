import React from "react";
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
  reduxImg,
} from "../utils/icons";

const Skills = () => {
  const languages = [
    { name: "C++", img: cppImg, filter: false },
    { name: "C Lang", img: cImg, filter: false },
    { name: "Python", img: pythonImg, filter: false },
  ];

  const webs = [
    { name: "HTML5", img: htmlImg, filter: false },
    { name: "CSS3", img: cssImg, filter: false },
    { name: "Java Script", img: javascriptImg, filter: false },
    { name: "Type Script", img: typescriptImg, filter: false },
    { name: "React Js", img: reactImg, filter: false },
    { name: "Node Js", img: nodeImg, filter: false },
    { name: "Next Js", img: nextjsImg, filter: true },
    { name: "Tailwind CSS", img: tailwindcssImg, filter: false },
    { name: "Redux", img: reduxImg, filter: false },
  ];

  const others = [
    { name: "Git", img: gitImg, filter: false },
    { name: "GitHub", img: githubImg, filter: true },
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
          {languages.map((language, index) => (
            <div key={index}>
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
          {webs.map((web, index) => (
            <div key={index}>
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
          {others.map((other, index) => (
            <div key={index}>
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
};

export default Skills;
