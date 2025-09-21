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
  postgresqlImg,
  awsImg,
  redisImg,
  seleniumImg,
  postmanImg,
  openapiImg,
  vitestImg,
  vscodeImg,
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
      title: "DataBase",
      data: [
        { name: "MySQL", img: mysqlImg },
        { name: "PostgreSQL", img: postgresqlImg },
        { name: "Mongo DB", img: mongodbImg },
        { name: "Redis", img: redisImg },
      ],
    },
    {
      title: "Others",
      data: [
        { name: "Git", img: gitImg },
        { name: "GitHub", img: githubImg, filter: true },
        { name: "AWS", img: awsImg, filter: true },
        { name: "Firebase", img: firebaseImg },
        { name: "OpenAPI", img: openapiImg },
        { name: "Vitest", img: vitestImg },
        { name: "Selenium", img: seleniumImg },
        { name: "Postman", img: postmanImg },
        { name: "VS Code", img: vscodeImg },
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
          <div key={index} className="sk-par-con" data-aos="fade">
            <h4>{section.title} :</h4>
            <div className="skills-content">
              {section.data.map((skill, i) => (
                <div key={i} className="skill-item">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{ filter: skill.filter ? "invert(1)" : "none" }}
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
