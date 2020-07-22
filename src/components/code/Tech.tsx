import React from "react";
import tech from "../../content/code/tech.json";
import SkillBox from "./SkillBox";
import StackBox from "./StackBox";

const Tech: React.FC = () => {
  return (
    <div className="tech" id="tech">
      <h1 className="text-center">TECH</h1>
      <h2 className="text-center">Skills</h2>
      <div className="flex-container">
        {tech.proficient.map((element, index) => (
          <SkillBox tech={element} isProficient={true} key={index} />
        ))}
        {tech.comfortable.map((element, index) => (
          <SkillBox tech={element} isProficient={false} key={index} />
        ))}
      </div>
      <h2 className="text-center" style={{ marginTop: 40 }}>
        My Stack
      </h2>
      <div className="flex-container">
        {tech.stack.map((element, index) => (
          <StackBox tech={element} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
