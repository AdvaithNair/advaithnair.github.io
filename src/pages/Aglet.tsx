import React from "react";
import Listing from "../components/projects/Aglet/Listing";
import aglet from "../content/projects/Aglet.json";
import { AgletData } from "../types";
import SortBox from "../components/projects/Aglet/SortBar";
import AgletLogo from "../images/Aglet/AgletLogo.png";
import AgletApp from "../images/Aglet/Aglet-app.png";

const Aglet: React.FC = () => {
  return (
    <div>
      <img
        src={AgletLogo}
        alt={"Aglet Logo"}
        className={"project-landing"}
      ></img>
      <SortBox />
      <h1 style={{marginBottom: -20}}>Your Collection ({aglet.Aglet.length})</h1>
      {aglet.Aglet.map((element: AgletData, index: number) => (
        <Listing key={index} data={element} index={index + 1} />
      ))}
      <img
        src={AgletApp}
        alt={"Aglet App"}
        className={"project-landing"}
        style={{
          border: "5px solid",
          marginBottom: 10,
          marginTop: 40,
          width: "100%"
        }}
      ></img>
      <p className="text-center">
        <i>Aglet Application Screenshot</i>
      </p>
    </div>
  );
};

export default Aglet;
