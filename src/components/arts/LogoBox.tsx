import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

interface Props {
  logo: string;
  isIcon: boolean;
}

const LogoBox: React.FC<Props> = ({ logo, isIcon }) => {
  const image: string = isIcon
    ? require(`../../images/Arts/Logos/Icon/${logo}.png`)
    : require(`../../images/Arts/Logos/Full/${logo}.png`);
  return (
    <Tooltip title={logo}>
      <div className={isIcon ? "icon-box" : "logo-box"}>
        <img src={image} alt={logo} className={"logo-image"}></img>
      </div>
    </Tooltip>
  );
};

export default LogoBox;
