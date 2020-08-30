import React, { useEffect } from "react";
import RantLogo from "../images/RANT/RANTLogo.png";
import RantApp from "../images/RANT/RANT-app.png";
import Post from "../components/projects/RANT/Post";
import RANT from "../content/projects/RANT.json";
import { RantData, openLink } from "../types";
import SearchBar from "../components/projects/RANT/SearchBar";

const Rant: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <img src={RantLogo} alt={"Rant Logo"} className="project-landing"></img>
      <div
        className="button"
        onClick={() => openLink("https://rant-dd853.web.app/")}
      >
        Visit RANT
      </div>
      <SearchBar />
      {RANT.RANTS.map((element: RantData, index: number) => (
        <Post key={index} data={element} />
      ))}
      <img
        src={RantApp}
        alt={"RANT App"}
        id={'rant-image-project'}
        className={"project-landing"}
        style={{
          border: "3px solid",
          marginBottom: 10,
          marginTop: 40
        }}
      ></img>
      <p className="text-center">
        <i>RANT Application Screenshot</i>
      </p>
    </div>
  );
};

export default Rant;
