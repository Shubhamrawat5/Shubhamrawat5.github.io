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
  const skillSections = [
    {
      title: "Language",
      data: [
        { name: "C++", img: cppImg },
        { name: "C Lang", img: cImg },
        { name: "Python", img: pythonImg },
      ],
    },
    {
      title: "Web",
      data: [
        { name: "HTML5", img: htmlImg },
        { name: "CSS3", img: cssImg },
        { name: "Java Script", img: javascriptImg },
        { name: "Type Script", img: typescriptImg },
        { name: "React Js", img: reactImg },
        { name: "Node Js", img: nodeImg },
        { name: "Next Js", img: nextjsImg, filter: true },
        { name: "Tailwind CSS", img: tailwindcssImg },
        { name: "Redux", img: reduxImg },
      ],
    },
    {
      title: "Others",
      data: [
        { name: "Git", img: gitImg },
        { name: "GitHub", img: githubImg, filter: true },
        { name: "MySQL", img: mysqlImg },
        { name: "Mongo DB", img: mongodbImg },
        { name: "Firebase", img: firebaseImg },
      ],
    },
  ];

  return (
    <section id="skills">
      <div>
        <h2 className="section-heading">&#60; SKILLS / &#62;</h2>
      </div>

      <div className="skill-container">
        {skillSections.map((section, index) => (
          <div
            key={index}
            className={`sk-par-con skill-${section.title.toLowerCase()}`}
            data-aos="fade"
          >
            <h4>{section.title} :</h4>
            {section.data.map((skill, i) => (
              <div key={i}>
                <img
                  src={skill.img}
                  alt={skill.name}
                  style={{ filter: skill.filter ? "invert(1)" : "none" }}
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
