import React from "react";
import Education from "./resume/Education";
import Experience from "./resume/Experience";

const Resume: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-center">RESUME</h1>
      <div className="resume-parts">
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
