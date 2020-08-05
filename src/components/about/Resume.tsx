import React from "react";
import Education from "./resume/Education";
import Skills from "./resume/Skills";
import Experience from "./resume/Experience";
import Leadership from "./resume/Leadership";

const Resume: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-center">RESUME</h1>
      <div className="resume-parts">
        <Education />
        <Skills />
        <Experience />
        <Leadership />
      </div>
    </div>
  );
};

export default Resume;
