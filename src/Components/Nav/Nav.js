import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Title">
        <Link to="/">
          <h1>dcm</h1>{" "}
        </Link>
      </div>
      <ul className="NavList">
        <li className="NavItem active">
          <Link to="/projects">projects</Link>
        </li>
        <li className="NavItem active">
          <Link to="/about">about</Link>
        </li>
        <li className="NavItem">
          <Link to="/resume">resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
