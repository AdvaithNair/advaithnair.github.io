import React from "react";
import Education from "./resume/Education";
import Experience from "./resume/Experience";
import Skills from "./resume/Skills";

const Resume: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-center">RESUME</h1>
      <div className="resume-parts">
        <Education />
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
