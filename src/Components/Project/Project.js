import React from "react";
import "./Project.css";


const Project = props => {
  return (
    <div className="Project">
      <h2>{props.title}</h2>
      <div className="imgPlaceholder" style={{background: `url(${props.image}) center center/cover no-repeat`}}></div>
      <span><a href={props.link} target='_blank' rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a><a href={props.repo} target='_blank' rel="noopener noreferrer"><i className="fab fa-github"></i></a></span>
      <p>{props.description}</p>
    </div>
  );
};

export default Project;
