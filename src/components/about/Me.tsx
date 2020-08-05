import React from "react";
import { useHistory } from "react-router";
import Tooltip from "@material-ui/core/Tooltip";
import about from "../../content/about/about.json";
import FunFactsBox from "./FunFactsBox";
const Headshot = require("../../images/Headshot.JPG");

const Me: React.FC = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header-img-container" onClick={() => history.push("/")}>
        <Tooltip title="Home">
          <img className="header-img" src={Headshot} alt="Advaith Nair" />
        </Tooltip>
      </div>
      <h1 className="text-center">ME</h1>
      <p className="header-bio">
        <i>{about.subtitle}</i>
      </p>
      <p className="text-center">{about.bio}</p>
      <h2 className="text-center">Fun Facts</h2>
      <div className="flex-container">
        {about.facts.map((element, index) => (
          <FunFactsBox
            image={element.image}
            description={element.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Me;
