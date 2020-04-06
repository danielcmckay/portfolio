import React from "react";
import {Link} from 'react-router-dom';
import Project from "../Project/Project";
import "./ContentWrapper.css";
import ClipJointGif from "../../Images/clipjoint.png";
import StoryBoardGif from "../../Images/storyboard.png";
import ZenGardenGif from "../../Images/zengarden.png";


const ContentWrapper = () => {
  return (
    <div className="ContentWrapper">
      <Project
        title="StoryBoard"
        image={StoryBoardGif}

        link="https://storyboard-2c24b.web.app/"
        repo="https://github.com/danielcmckay/storyboard"
        description="A CRUD app for storing newspaper story ideas built with the MERN stack. Features users authentication using JWT, a simple interface for creating and storing ideas and a clean design for both mobile and desktop."
      />
      <Project
        title="ZenGarden"
        link="https://zengarden-14251.web.app/"
        image={ZenGardenGif}

        repo="https://github.com/danielcmckay/ZenGarden"
        description="A minimalist single page app built with React that displays a random Zen or Buddhist quote pulled from a Firestore database. Users can interact as a guest, or create an account and save and access favorite quotes."
      />

      <Project
        title="Clip Joint 406"
        image={ClipJointGif}
        link='www.clipjoint406.com'
        description="A static website built for a local barbershop, utilizing a clean, modern design. Built with HTML and CSS."
      />
    </div>
  );
};

export default ContentWrapper;
