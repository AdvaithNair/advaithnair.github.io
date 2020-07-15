import React from "react";

interface Props {
  tech: string;
  isProficient: boolean;
}

const SkillBox: React.FC<Props> = ({ tech, isProficient }) => {
  const newTech: string = tech === "C#" ? "CSharp" : tech;
  const image = require(`../images/Skills/${newTech}.png`);
  return (
    <div className="skill-box">
      <div
        style={{ backgroundColor: isProficient ? "#1677CB" : "#CCCCCC" }}
        className="skill-title"
      >
        <h3 className="text-center" style={{ color: isProficient ? "white" : "black" }}>{tech}</h3>
      </div>

      <img src={image} alt={tech} className="skill-image"></img>
    </div>
  );
};

export default SkillBox;
