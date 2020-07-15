import React from "react";
import tech from "../content/tech.json";
import SkillBox from "./SkillBox";

const Tech: React.FC = () => {
  return (
    <div className="tech">
      <h1 className="text-center">Tech</h1>
      <h2 className="text-center">Skills</h2>
      <div className="skills-container">
        {tech.proficient.map(element => (
          <SkillBox tech={element} isProficient={true} />
        ))}
        {tech.comfortable.map(element => (
          <SkillBox tech={element} isProficient={false} />
        ))}
      </div>
      <h2 className="text-center">Stacks</h2>
    </div>
  );
};

export default Tech;
