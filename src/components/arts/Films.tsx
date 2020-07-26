import React from "react";
import films from "../../content/arts/films.json";
import LogoBox from "./LogoBox";
import Iframe from "react-iframe";

const Films: React.FC = () => {
  const playlistDimensions = {
    width: "560",
    height: "315"
  };
  return (
    <div>
      <h1 id="films">FILMS</h1>
      <h2>Robotics</h2>
      <div className="embed-container">
        <Iframe className="film-playlist" url={films.featured} />
      </div>
    </div>
  );
};

export default Films;
