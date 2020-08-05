import React from "react";
import Education from "./resume/Education";

const Resume: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-center">RESUME</h1>
      <h2 className="resume-section">EDUCATION</h2>
      <Education />
    </div>
  );
};

export default Resume;
