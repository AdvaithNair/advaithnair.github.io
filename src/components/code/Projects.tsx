import React from "react";
import projects from "../../content/code/projects.json";
import ProjectBox from "./ProjectBox";
import { Project } from "../../types.js";

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <h1 className="text-center">PROJECTS</h1>
      <div className="flex-container">
        {projects.projects.map((element: Project, index: number) => (
          <ProjectBox data={element} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
