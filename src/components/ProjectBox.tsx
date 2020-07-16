import React, { useState } from "react";
import GitHubIcon from "../images/Icons/GitHub.png";
import { Project, openLink } from "../types";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";

interface Props {
  data: Project;
}

const ProjectBox: React.FC<Props> = ({ data }) => {
  const logo: string = require(`../images/Projects/${data.title}-logo.png`);
  const app: string = require(`../images/Projects/${data.title}-app.png`);

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="project-box">
      <div className="project-title">
        <h2 className="text-center">{data.title}</h2>
        <Tooltip title="GitHub">
          <img
            src={GitHubIcon}
            alt="GitHub"
            className="github-icon"
            onClick={() => openLink(data.repo)}
          ></img>
        </Tooltip>
      </div>
      <img src={logo} alt={data.title} className="skill-image"></img>
      <p className="project-description">
        <i>{data.description}</i>
      </p>
      <div className="button" onClick={() => setOpen(true)}>
        <p className="text-center">More</p>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="project-modal">
          <h1 className="text-center">{data.title}</h1>
          <img
            src={app}
            alt={data.title}
            className="skill-image"
            style={{ marginTop: 20 }}
          ></img>
          <p className="project-description">
            <i>{data.description}</i>
          </p>
          {data!.about && (
            <div className="text-center">
              <h3 style={{ marginTop: 20 }}>
                About
              </h3>
              <p>{data.about}</p>
            </div>
          )}
          {data!.tech && (
            <div>
              <h3 className="text-center" style={{ marginTop: 20 }}>
                Tech
              </h3>
              {data!.tech!.general && (
                <div>
                  <h4 style={{ marginTop: 10 }}>General</h4>
                  <p>
                    {data.tech!.general.map(element => (
                      <li>{element}</li>
                    ))}
                  </p>
                </div>
              )}
              {data!.tech!.frontend && (
                <div>
                  <h4 style={{ marginTop: 10 }}>Frontend</h4>
                  <p>
                    {data.tech!.frontend.map(element => (
                      <li>{element}</li>
                    ))}
                  </p>
                </div>
              )}
              {data!.tech!.backend && (
                <div>
                  <h4 style={{ marginTop: 10 }}>Backend</h4>
                  <p>
                    {data.tech!.backend.map(element => (
                      <li>{element}</li>
                    ))}
                  </p>
                </div>
              )}
            </div>
          )}

          {data.site && (
            <div className="button" onClick={() => openLink(data.site || "")}>
              <p className="text-center">Visit</p>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default ProjectBox;
