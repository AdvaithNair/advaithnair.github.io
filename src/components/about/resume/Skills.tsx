import React from "react";
import resume from "../../../content/about/resume.json";

const Skills: React.FC = () => {
  return (
    <div>
      <h2 className="resume-section">TECHNICAL SKILLS</h2>
      {resume.skills}
    </div>
  );
};

export default Skills;