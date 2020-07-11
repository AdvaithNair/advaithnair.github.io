import React from "react";
const Headshot = require("../images/Headshot.JPG");

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-img-container">
        <img className="header-img" src={Headshot} alt="Advaith Nair" />
      </div>
      <h1 className="header-name">Advaith Nair</h1>
      <p className="header-bio">
        <i>Hi I'm Advaith and I Code.</i>
      </p>
      <nav>
        <a href="#about">About</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
      </nav>
    </div>
  );
};

export default Header;
