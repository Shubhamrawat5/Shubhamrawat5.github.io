function Aboutme() {
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
          <p className="level l1"> let me = &#123;</p>
          <p className="level l2">"name" : &#123;</p>
          <p className="level l3">"fname" : "Shubham",</p>
          <p className="level l3">"sname" : "Rawat"</p>
          <p className="level l2">&#125;,</p>
          <p className="level l2">"place" : &#123;</p>
          <p className="level l3">"hometown" : "Pauri, Uttarakhand",</p>
          <p className="level l3">"currently" : "Bengalore, Karnataka" </p>
          <p className="level l2">&#125;,</p>
          <p className="level l2">"education" : &#123;</p>
          <p className="level l3">"intermediate" : &#123;</p>
          <p className="level l4">"name" : "B R Modern School, Pauri",</p>
          <p className="level l4">"board" : "CBSE",</p>
          <p className="level l4">"batch" : "2016-2017"</p>
          <p className="level l3">&#125;,</p>
          <p className="level l3">"B.Tech" : &#123;</p>
          <p className="level l4">
            "name" : "Institute of Technology, Gopeshwar",
          </p>
          <p className="level l4">
            "university" : "Uttarakhand Technical University"
          </p>
          <p className="level l4">"batch" : "2017-2021"</p>
          <p className="level l3">&#125;</p>
          <p className="level l2">&#125;,</p>
          <p className="level l2">
            "interest" : ["Video Games", "Movies", "Space", "Traveling"],
          </p>
          <p className="level l2">
            "other skills" : ["DSA", "Web Scraping", "Bots"]
          </p>
          <p className="level l1">&#125;;</p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
