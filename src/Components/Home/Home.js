import React from 'react';
import './Home.css';
import Typist from 'react-typist';
import CodeIcon from './CodeIcon';
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className="Home">
      <Typist cursor={{show: false}}><h1>Daniel McKay</h1></Typist>
      <sub>I'm a Montana-based front end developer that places a top priority on clean design, both on the screen and in the code.</sub>
      <span className="social-icons"><a target="_blank" href="https://github.com/danielcmckay" rel="noopener noreferrer"><i className="fab fa-github"></i></a><a target="_blank" href="https://www.linkedin.com/in/daniel-mckay-a96a3195/" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a><a target="_blank" href="https://www.instagram.com/danielcmckay/" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></span>
    </div>
    <CodeIcon />
    <Link to="/projects"><button className="Next-Page-Btn">See my work</button></Link>
    </>
  )
}

export default Home
