import React from "react";
import about from "../content/about.json";

const About: React.FC = () => {
  return (
    <div className="about">
      <h1 className="text-center">About</h1>
      {about.bio.split("\n").map((item, index) => (
        <p className="text-center" key={index}>
          {item}
        </p>
      ))}
      <div className="about-list-main">
        <div className="about-list">
          {about.list.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
