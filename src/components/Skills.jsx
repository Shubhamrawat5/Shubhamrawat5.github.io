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
        { name: "JavaScript", img: javascriptImg },
        { name: "TypeScript", img: typescriptImg },
        { name: "React Js", img: reactImg },
        { name: "Node Js", img: nodeImg },
        { name: "Next Js", img: nextjsImg, filter: true },
        { name: "Tailwind CSS", img: tailwindcssImg },
        { name: "Redux", img: reduxImg },
      ],
    },
    {
      title: "Database",
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
    <section
      id="skills"
      className="bg-gray-900 text-gray-100 flex flex-col items-center py-12 px-6 min-h-screen"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold border-b-2 border-gray-100 mb-10">
        &#60; SKILLS / &#62;
      </h2>

      {/* Skill Categories */}
      <div className="max-w-5xl w-full text-center">
        {skillSections.map((section, index) => (
          <div key={index} className="mb-7">
            {/* Subheading */}
            <h4 className="text-left underline text-lg mb-4 text-gray-200">
              {section.title} :
            </h4>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-start gap-6 sm:gap-8">
              {section.data.map((skill, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className={`w-12 h-12 sm:w-14 sm:h-14 mb-2 ${
                      skill.filter ? "invert" : ""
                    }`}
                  />
                  <p className="text-sm sm:text-base">{skill.name}</p>
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
