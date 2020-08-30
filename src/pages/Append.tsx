import React, { useEffect } from "react";
import AppendLogo from "../images/Append/AppendTransparent.png";
import AppendApp from "../images/Append/Append-app.png";
import Card from "../components/projects/Append/Card";
import AppendObject from "../content/projects/Append.json";

const Append: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img
        src={AppendLogo}
        alt={"Append Logo"}
        className="project-landing"
      ></img>
      <div className="flex-container">
        <Card data={AppendObject.Append[0]} index={0} />
        <Card data={AppendObject.Append[1]} index={1} />
        <Card data={AppendObject.Append[2]} index={2} />
        <Card data={AppendObject.Append[3]} index={3} />
      </div>
      <img
        src={AppendApp}
        alt={"Append App"}
        className={"project-landing"}
        style={{
          border: "3px solid",
          marginBottom: 10,
          marginTop: 40,
          width: "100%"
        }}
      ></img>
      <p className="text-center">
        <i>Append Application Screenshot</i>
      </p>
    </div>
  );
};

export default Append;
