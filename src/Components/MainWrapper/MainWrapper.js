import React from "react";
import Nav from "../Nav/Nav";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume";
import './MainWrapper.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const MainWrapper = () => {
  return (
    <div className="MainWrapper">

      <BrowserRouter>
      <Nav />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects" exact>
            <ContentWrapper />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainWrapper;
