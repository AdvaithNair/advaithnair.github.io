import React from "react";
import { useHistory } from "react-router";
import Tooltip from "@material-ui/core/Tooltip";
const Headshot = require("../../images/Headshot.JPG");

const CodeHeader: React.FC = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header-img-container" onClick={() => history.push("/")}>
        <Tooltip title="Home">
          <img className="header-img" src={Headshot} alt="Advaith Nair" />
        </Tooltip>
      </div>
      <h1 className="header-name">Advaith Nair</h1>
      <p className="header-bio">
        <i>Hi I'm Advaith and I Code.</i>
      </p>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#tech">Tech</a>
        <a href="#socials">Socials</a>
      </nav>
    </div>
  );
};

export default CodeHeader;
