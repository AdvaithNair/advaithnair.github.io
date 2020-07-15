import React from "react";
import tech from "../content/tech.json";
import SkillBox from "./SkillBox";
import StackBox from "./StackBox";

const Tech: React.FC = () => {
  return (
    <div className="tech">
      <h1 className="text-center">Tech</h1>
      <h2 className="text-center">Skills</h2>
      <div className="flex-container">
        {tech.proficient.map(element => (
          <SkillBox tech={element} isProficient={true} />
        ))}
        {tech.comfortable.map(element => (
          <SkillBox tech={element} isProficient={false} />
        ))}
      </div>
      <h2 className="text-center" style ={{marginTop: 40}}>My Stack</h2>
      <div className="flex-container">
        {tech.stack.map(element => (
          <StackBox tech={element} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
