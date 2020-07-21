import React from "react";

interface Props {
  tech: string;
}

const StackBox: React.FC<Props> = ({ tech }) => {
  const image: string = require(`../../images/Skills/${tech}.png`);
  return (
    <div className="stack-box">
      <div className="stack-title">
        <h3 className="text-center">{tech}</h3>
      </div>
      <img src={image} alt={tech} className="skill-image"></img>
    </div>
  );
};

export default StackBox;
