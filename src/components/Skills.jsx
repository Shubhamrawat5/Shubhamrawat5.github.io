import React from "react";
import cppImg from "../asserts/images/skill/cplusplus.png";
import cImg from "../asserts/images/skill/clang.png";
import pythonImg from "../asserts/images/skill/python.png";
import htmlImg from "../asserts/images/skill/html.png";
import cssImg from "../asserts/images/skill/css.png";
import jsImg from "../asserts/images/skill/javascript.png";
import nodejsImg from "../asserts/images/skill/nodejs3.png";
import reactjsImg from "../asserts/images/skill/react.png";
import gitImg from "../asserts/images/skill/git.png";
import githubImg from "../asserts/images/skill/github2.png";
import vscodeImg from "../asserts/images/skill/vscode.png";
import mongodbImg from "../asserts/images/skill/mongodb.png";
import mysqlImg from "../asserts/images/skill/mysql.png";

function Skills() {
  const languages = [
    { name: "C++", img: cppImg },
    { name: "C Lang", img: cImg },
    { name: "Python", img: pythonImg },
  ];

  const webs = [
    { name: "Html5", img: htmlImg },
    { name: "Css3", img: cssImg },
    { name: "Java Script", img: jsImg },
    { name: "Node js", img: nodejsImg },
    { name: "React js", img: reactjsImg },
  ];

  const others = [
    { name: "Git", img: gitImg },
    { name: "Github", img: githubImg },
    { name: "VS Code", img: vscodeImg },
    { name: "MySQL", img: mysqlImg },
    { name: "Mongo DB", img: mongodbImg },
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
