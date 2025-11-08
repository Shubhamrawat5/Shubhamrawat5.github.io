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

      {/* Terminal Box */}
      <div className="w-full max-w-5xl bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 font-['JetBrains_Mono',monospace] text-sm sm:text-base rounded-lg shadow-lg overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="bg-gray-700 px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Code Body */}
        <div className="py-4 px-6 leading-relaxed overflow-x-auto">
          <p>
            <span className="text-emerald-400">const</span>{" "}
            <span className="text-sky-400">me</span> = &#123;
          </p>

          <p className="ml-5 text-indigo-300">"name" : &#123;</p>
          <p className="ml-10 text-indigo-300">
            "fname" :{" "}
            <span className="text-orange-300">"{data.name.fname}"</span>,
          </p>
          <p className="ml-10 text-indigo-300">
            "sname" :{" "}
            <span className="text-orange-300">"{data.name.sname}"</span>
          </p>
          <p className="ml-5 text-gray-400">&#125;,</p>

          <p className="ml-5 text-indigo-300">"location" : &#123;</p>
          <p className="ml-10 text-indigo-300">
            "current" :{" "}
            <span className="text-orange-300">"{data.location.current}"</span>,
          </p>
          <p className="ml-10 text-indigo-300">
            "hometown" :{" "}
            <span className="text-orange-300">"{data.location.hometown}"</span>
          </p>
          <p className="ml-5 text-gray-400">&#125;,</p>

          <p className="ml-5 text-indigo-300">"education" : &#123;</p>
          <p className="ml-10 text-indigo-300">
            "degree" :{" "}
            <span className="text-orange-300">"{data.education.degree}"</span>,
          </p>
          <p className="ml-10 text-indigo-300">
            "branch" :{" "}
            <span className="text-orange-300">"{data.education.branch}"</span>,
          </p>
          <p className="ml-10 text-indigo-300">
            "university" :{" "}
            <span className="text-orange-300">
              "{data.education.university}"
            </span>
            ,
          </p>
          <p className="ml-10 text-indigo-300">
            "batch" :{" "}
            <span className="text-orange-300">"{data.education.batch}"</span>
          </p>
          <p className="ml-5 text-gray-400">&#125;,</p>

          <p className="ml-5 text-indigo-300">
            "interests" : [
            {data.interests.map((interest, i) => (
              <span key={i} className="text-orange-300">
                "{interest}"{i < data.interests.length - 1 ? ", " : ""}
              </span>
            ))}
            ],
          </p>

          <p className="ml-5 text-indigo-300">
            "otherSkills" : [
            {data.otherSkills.map((skill, i) => (
              <span key={i} className="text-orange-300">
                "{skill}"{i < data.otherSkills.length - 1 ? ", " : ""}
              </span>
            ))}
            ]
          </p>

          <p className="text-gray-400">&#125;;</p>
        </div>
      </div>
    </section>
  );
};

export default About;
