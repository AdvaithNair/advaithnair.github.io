import React, { useState } from "react";
import { useHistory } from "react-router";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Popover from "@material-ui/core/Popover";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
const ArtLogo = require("../../images/Logos/AdvaithArts.png");

const ArtHeader: React.FC = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="art-header">
      <div className="art-header-content">
        <div onClick={() => history.push("/")}>
          <Tooltip title="Home">
            <img className="art-header-img" src={ArtLogo} alt="Advaith Arts" />
          </Tooltip>
        </div>
        <h1>ARTS</h1>
        <div className="art-nav">
          <div className="art-mobile">
            <IconButton style={{ color: "black" }} onClick={handleClick}>
              <MenuIcon style={{ fontSize: 40 }} />
            </IconButton>
          </div>
          <div className="art-nav-items">
            <a href="#logos">Logos</a>
            <a href="#films">Films</a>
            <a href="#other">Other</a>
          </div>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <div className="art-mobile-items">
                <a href="#logos" onClick={handleClose}>Logos</a>
                <a href="#films" onClick={handleClose}>Films</a>
                <a href="#other" onClick={handleClose}>Other</a>
              </div>
            </ClickAwayListener>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ArtHeader;
