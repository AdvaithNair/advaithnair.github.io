import React from "react";
import { Social, openLink } from "../../types";
import Tooltip from "@material-ui/core/Tooltip";

interface Props {
  social: Social;
}

const SocialBox: React.FC<Props> = ({ social }) => {
  const image: string = require(`../../images/Socials/${social.name}.png`);
  return (
    <Tooltip title={social.name}>
      <div className="social-box">
        <img
          src={image}
          alt={social.name}
          className="skill-image"
          onClick={() => openLink(social.link)}
        ></img>
      </div>
    </Tooltip>
  );
};

export default SocialBox;
