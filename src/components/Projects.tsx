import React from "react";
import projects from "../content/projects.json";
import ProjectBox from "./ProjectBox";
import { Project } from "../types.js";

const Projects: React.FC = () => {
  return (
    <div className="tech">
      <h1 className="text-center">Projects</h1>
      <div className="flex-container">
        {projects.projects.map((element: Project) => (
          <ProjectBox data={element} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
