import React from "react";
import "./ResumeContent.css";

const ResumeContent = props => {
  return (
    <div className="ResumeContent">
      <span className="ContentTitleWrapper">
        <h2 className="ContentTitle">{props.title}</h2>
        <a className="ContentLink" href={props.link}>{props.link} </a>
        <a className="ContentGithubLink" href={props.github}>{props.github}</a>
      </span>
      <span className="ContentDescription">
        {props.description}
      </span>
    </div>
  );
};

export default ResumeContent;
