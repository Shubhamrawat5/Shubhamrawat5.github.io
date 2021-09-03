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

function Skills() {
  return (
    <section id="skills">
      <div>
        <h2 className="section-heading">&#60; SKILLS / &#62;</h2>
      </div>

      <div className="skill-container">
        <div className="skill-language sk-par-con" data-aos="fade">
          <h4>Language :</h4>
          <img src={cppImg} alt="c++" />
          <img src={cImg} alt="c" />
          <img src={pythonImg} alt="python" />
        </div>

        <div className="skill-web sk-par-con" data-aos="fade">
          <h4>Web :</h4>
          <img src={htmlImg} alt="html" />
          <img src={cssImg} alt="css" />
          <img src={jsImg} alt="js" />
          <img src={nodejsImg} alt="nodejs" />
          <img src={reactjsImg} alt="reactjs" />
        </div>

        <div className="skill-other sk-par-con" data-aos="fade">
          <h4>Others :</h4>
          <img src={gitImg} alt="git" />
          <img src={githubImg} alt="github" />
          <img src={vscodeImg} alt="vscode" />
          <img src={mongodbImg} alt="mongo" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
