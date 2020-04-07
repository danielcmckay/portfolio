import React from "react";
import "./Resume.css";
import ResumeContent from "./ResumeContent";

const Resume = () => {
  return (
    <div className="Resume">
      <div className="titlediv">
        <h1 className="name">Daniel McKay</h1>
        <sub>Web Developer</sub>
      </div>
      <span className="contact">
        <p>ph. 608-212-5513</p>
        {"|"}
        <p>email: dcmckay10@gmail.com</p>
        {"|"}
      </span>
      <span className="contact">
      <a target="_blank" href="www.danielmckay.dev" rel="noopener noreferrer">danielmckay.dev</a>
        {"|"}
        <a target="_blank" href="https://github.com/danielcmckay" rel="noopener noreferrer">github.com/danielcmckay</a>
        {"|"}
      </span>
      <div className="ProjectsContent">
        <h2 className="ProjectsTitle">Projects</h2>
        <ResumeContent
          title="StoryBoard"
          link="https://storyboard-2c24b.web.app/"
          github="www.github.com/danielcmckay/storyboard"
          description="A CRUD app for storing newspaper story ideas built with the MERN stack. Features users authentication using JWT, a simple interface for creating and storing ideas and a clean design for both mobile and desktop."
        />
        <ResumeContent
          title="ZenGarden"
          link="https://zengarden-14251.web.app/"
          github="www.github.com/danielcmckay/zengarden"
          description="A minimalist single page app built with React that displays a random Zen or Buddhist quote pulled from a Firestore database. Users can interact as a guest, or create an account and save and access favorite quotes."
        />
        <ResumeContent
          title="Clip Joint 406"
          github="https://github.com/danielcmckay"
          link="https://www.clipjoint406.com"
          description="A static website built for a local barbershop, utilizing a clean, modern design. Built with HTML and CSS."
        />
      </div>
      <div className="ProjectsContent SkillsContent">
        <h2 className="ProjectsTitle">Skills</h2>
        <ResumeContent
          title="Front End/Design"
          description="React.js, ES6 JavaScript, HTML5, CSS, Adobe XD, Adobe Photoshop, Figma"
        />
        <ResumeContent
          title="Back End"
          description="Node.js, Express, MongoDB, Firebase"
        />
      </div>
      <div className="ProjectsContent">
        <h2 className="ProjectsTitle">Education</h2>
        <ResumeContent
          title="University of Wisconsin-Madison"
          description="Double major in journalism and mass communication, classical guitar performance ||
          Cumulative GPA: 3.64, College of Letters &amp; Science Dean’s List (Spring 2013, 2014)"
        />
      </div>
    </div>
  );
};

export default Resume;
