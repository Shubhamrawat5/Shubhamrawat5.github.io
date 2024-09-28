import React from "react";

const About = () => {
  const data = {
    name: {
      fname: "Shubham",
      sname: "Rawat",
    },
    place: {
      hometown: "Pauri, Uttarakhand",
      currently: "Bangalore, Karnataka",
    },
    education: {
      intermediate: {
        name: "B R Modern School, Pauri",
        board: "CBSE",
        batch: "2016-2017",
      },
      "B.Tech": {
        name: "Institute of Technology, Gopeshwar",
        university: "Uttarakhand Technical University",
        batch: "2017-2021",
      },
    },
    interests: ["Video Games", "Movies", "Space", "Traveling"],
    otherSkills: ["DSA", "Web Scraping", "Bots"],
  };

  return (
    <section id="aboutme">
      <div>
        <h2 className="section-heading">&#60; ABOUT ME / &#62;</h2>
      </div>
      <div className="about-info" data-aos="fade">
        <div className="about-me-header">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="about-me">
          <p className="level l1">let me = &#123;</p>
          <p className="level l2">"name" : &#123;</p>
          <p className="level l3">"fname" : "{data.name.fname}",</p>
          <p className="level l3">"sname" : "{data.name.sname}"</p>
          <p className="level l2">&#125;,</p>
          <p className="level l2">"place" : &#123;</p>
          <p className="level l3">"hometown" : "{data.place.hometown}",</p>
          <p className="level l3">"currently" : "{data.place.currently}"</p>
          <p className="level l2">&#125;,</p>
          <p className="level l2">"education" : &#123;</p>
          <p className="level l3">"intermediate" : &#123;</p>
          <p className="level l4">
            "name" : "{data.education.intermediate.name}",
          </p>
          <p className="level l4">
            "board" : "{data.education.intermediate.board}",
          </p>
          <p className="level l4">
            "batch" : "{data.education.intermediate.batch}"
          </p>
          <p className="level l3">&#125;,</p>
          <p className="level l3">"B.Tech" : &#123;</p>
          <p className="level l4">
            "name" : "{data.education["B.Tech"].name}",
          </p>
          <p className="level l4">
            "university" : "{data.education["B.Tech"].university}",
          </p>
          <p className="level l4">
            "batch" : "{data.education["B.Tech"].batch}"
          </p>
          <p className="level l3">&#125;</p>
          <p className="level l2">&#125;,</p>
          <p className="level l2">
            "interest" : &#91;
            {data.interests.map((interest, index) => (
              <span key={index}>
                "{interest}"{index < data.interests.length - 1 ? ", " : ""}
              </span>
            ))}
            &#93;,
          </p>
          <p className="level l2">
            "other skills" : &#91;
            {data.otherSkills.map((skill, index) => (
              <span key={index}>
                "{skill}"{index < data.otherSkills.length - 1 ? ", " : ""}
              </span>
            ))}
            &#93;
          </p>
          <p className="level l1">&#125;;</p>
        </div>
      </div>
    </section>
  );
};

export default About;
