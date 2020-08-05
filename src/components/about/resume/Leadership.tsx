import React from "react";
import resume from "../../../content/about/resume.json";

const Leadership: React.FC = () => {
  return (
    <div>
      <h2 className="resume-section">LEADERSHIP</h2>
      {resume.leadership.map((element, index) => (
        <div key={index}>
          <div className="side-by-side">
            <p className="left-element">
              <b>{element.title}</b> | <i>{element.organization}</i>{" "}
              {element.website && (
                <span>
                  {" "}
                  |{" "}
                  <i>
                    <a
                      className="website-link"
                      href={`https://${element.website}`}
                    >
                      {element.website}
                    </a>
                  </i>
                </span>
              )}
            </p>
            <p className="right-element">{element.date}</p>
            <div className="clear"></div>
          </div>
          <div className="bullet-points">
            {element.content.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leadership;
