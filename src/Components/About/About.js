import React from "react";
import "./About.css";
import Headshot from "../../Images/headshot.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="AboutHeader">
        <p>
          <span className="About-Special">Hi, I’m Daniel.</span>{" "}
          <span
            className="Headshot-container"
            style={{
              background: `url(${Headshot}) top center/cover no-repeat`
            }}
          ></span>
          I’m a web developer that primarily uses React.js, as well as
          HTML, CSS and Vanilla Javascript, to create clean, easy-to-use web
          applications. As a developer, I place a big focus on design, both for
          the user and in my code. An application can do
          all sorts of incredible things, but if it’s not attractive and
          intuitive, that application likely won’t get used. <br />
          <br /> In my portfolio you’ll find a few of my projects that I feel
          best demonstrate my skillset. The first is a CRUD application built
          with the MERN stack, where a user can sign up and create, store, and
          delete story ideas for a newspaper – it was built to organize my life
          in my previous job as a newspaper reporter. The application places a
          priority on a minimal design with both a light and dark theme. <br />
          <br /> The second project is a random quote generator that displays
          Zen quotes on a clean, pleasing page, and was made to be used as my
          browser’s homepage. I worked with the owner of a website featuring 430
          quotes and got permission to use his collection, but he did not have a
          database. To remedy that, I wrote a Node.js web scraper and collected
          all 430 quotes into a JSON file and created my own REST API with the
          quotes, which is available for others to use for their own projects as
          well. <br />
          <br /> The final site is a simple static website for a local
          barbershop in town, made with simple HTML, CSS and Javascript, and
          features my own photography as well. <br />
          <br /> On the last page of this site you’ll find my resume, as well as
          my contact information. If you have any questions or you’d like to
          work with me, please don’t hesitate to reach out. 
          <br/><br/> Daniel
        </p>
      </div>
    </div>
  );
};

export default About;
