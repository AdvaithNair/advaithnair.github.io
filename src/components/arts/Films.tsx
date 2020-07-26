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
      <h1 id="films" className="text-center">FILMS</h1>
      <h2 className="text-center">Featured</h2>
      <div className="embed-container">
        <Iframe className="film-playlist" url={films.featured} />
      </div>
      <h2 className="text-center">Robotics</h2>
      <div className="embed-container">
        <Iframe className="film-playlist" url={films.robotics} />
      </div>
    </div>
  );
};

export default Films;
