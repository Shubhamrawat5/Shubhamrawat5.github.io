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
  return (
    <section id="skills">
      <div>
        <h2 className="section-heading">&#60; SKILLS / &#62;</h2>
      </div>

      <div className="skill-container">
        <div className="skill-language sk-par-con" data-aos="fade">
          <h4>Language :</h4>
          <div>
            <img src={cppImg} alt="c++" />
            <p className="skill-name">C++</p>
          </div>
          <div>
            <img src={cImg} alt="c" />
            <p className="skill-name">C Lang</p>
          </div>
          <div>
            <img src={pythonImg} alt="python" />
            <p className="skill-name">Python</p>
          </div>
        </div>

        <div className="skill-web sk-par-con" data-aos="fade">
          <h4>Web :</h4>
          <div>
            <img src={htmlImg} alt="html" />
            <p className="skill-name">Html5</p>
          </div>
          <div>
            <img src={cssImg} alt="css" />
            <p className="skill-name">Css3</p>
          </div>
          <div>
            <img src={jsImg} alt="js" />
            <p className="skill-name">Java Script</p>
          </div>
          <div>
            <img src={nodejsImg} alt="nodejs" />
            <p className="skill-name">Node js</p>
          </div>
          <div>
            <img src={reactjsImg} alt="reactjs" />
            <p className="skill-name">React js</p>
          </div>
        </div>

        <div className="skill-other sk-par-con" data-aos="fade">
          <h4>Others :</h4>
          <div>
            <img src={gitImg} alt="git" />
            <p className="skill-name">Git</p>
          </div>
          <div>
            <img src={githubImg} alt="github" />
            <p className="skill-name">Github</p>
          </div>
          <div>
            <img src={vscodeImg} alt="vscode" />
            <p className="skill-name">VS Code</p>
          </div>
          <div>
            <img src={mysqlImg} alt="mysql" />
            <p className="skill-name">MySQL</p>
          </div>{" "}
          <div>
            <img src={mongodbImg} alt="mongo" />
            <p className="skill-name">Mongo DB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
