import React from "react";

const About = () => {
  const data = {
    name: { fname: "Shubham", sname: "Rawat" },
    location: {
      hometown: "Pauri, Uttarakhand",
      current: "Bangalore, Karnataka",
    },
    education: {
      degree: "B.Tech",
      branch: "Computer Science Engineering",
      university: "Uttarakhand Technical University",
      batch: "2017-2021",
    },
    interests: ["Video Games", "Movies", "Space", "Traveling"],
    otherSkills: ["DSA", "OOPs", "CI/CD", "Web Scraping", "Automation Bots"],
  };

  return (
    <section
      id="aboutme"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-12 px-6"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-gray-100 border-b-2 border-gray-100 mb-10">
        &#60; ABOUT ME / &#62;
      </h2>

      {/* About Box */}
      <div className="w-full max-w-5xl bg-gray-800 text-gray-100 font-mono text-sm sm:text-base rounded-lg shadow-md overflow-hidden">
        {/* Header Dots */}
        <div className="bg-gray-700 px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
        </div>

        {/* Body */}
        <div className="py-4 px-6 leading-relaxed overflow-x-auto">
          <p>const me = &#123;</p>

          <p className="ml-5">"name" : &#123;</p>
          <p className="ml-10">"fname" : "{data.name.fname}",</p>
          <p className="ml-10">"sname" : "{data.name.sname}"</p>
          <p className="ml-5">&#125;,</p>

          <p className="ml-5">"location" : &#123;</p>
          <p className="ml-10">"current" : "{data.location.current}"</p>
          <p className="ml-10">"hometown" : "{data.location.hometown}",</p>
          <p className="ml-5">&#125;,</p>

          <p className="ml-5">"education" : &#123;</p>
          <p className="ml-10">"degree" : "{data.education.degree}",</p>
          <p className="ml-10">"branch" : "{data.education.branch}",</p>
          <p className="ml-10">"university" : "{data.education.university}",</p>
          <p className="ml-10">"batch" : "{data.education.batch}"</p>
          <p className="ml-5">&#125;,</p>

          <p className="ml-5">
            "interest" : [
            {data.interests.map((interest, i) => (
              <span key={i}>
                "{interest}"{i < data.interests.length - 1 ? ", " : ""}
              </span>
            ))}
            ],
          </p>

          <p className="ml-5">
            "other skills" : [
            {data.otherSkills.map((skill, i) => (
              <span key={i}>
                "{skill}"{i < data.otherSkills.length - 1 ? ", " : ""}
              </span>
            ))}
            ]
          </p>

          <p>&#125;;</p>
        </div>
      </div>
    </section>
  );
};

export default About;
