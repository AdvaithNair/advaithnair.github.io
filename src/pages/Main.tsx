import React from "react";
import { useHistory } from "react-router-dom";

const Main: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <div className="main-cover"></div>
      <div className="main-container">
        <div className="main-title">
          <h1>ADVAITH NAIR</h1>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-item" onClick={() => history.push("/code")}>
          <p>Code</p>
        </div>
        <div className="menu-item">
          <p>Art</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
