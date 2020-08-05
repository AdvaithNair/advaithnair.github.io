import React from "react";
import resume from "../../../content/about/resume.json";

const Education: React.FC = () => {
  return (
    <div className="education">
      <div className="side-by-side">
        <p className="left-element">
          <b>{resume.education.school}</b>
        </p>
        <p className="right-element">Expected {resume.education.graduation}</p>
        <div className="clear"></div>
      </div>
      <p>
        <b>{resume.education.degree}</b>
      </p>
      <p>
        <b>Courses:</b>{" "}
        {resume.education.courses}
      </p>
    </div>
  );
};

export default Education;
