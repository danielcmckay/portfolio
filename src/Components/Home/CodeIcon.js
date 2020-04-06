import React from "react";
import "./CodeIcon.css";
import { useSpring, animated } from "react-spring";

const CodeIcon = () => {
  const props = useSpring({
    duration: "2s",
    from: { opacity: 0, transform: "translateX(10000px)" },
    to: [{ opacity: 1, transform: "translateX(0)" }]
  });

  return (
    <animated.div style={props} className="CodeIcon">
      <div className="topLevel"></div>
      <div className="midLevel"></div>
      <div className="insideLevel"></div>
      <div className="midLevel"></div>
      <div className="topLevel"></div>
    </animated.div>
  );
};

export default CodeIcon;
