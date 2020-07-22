import React from "react";
import "../App.css";
import Footer from "../components/code/Footer";
import Header from "../components/Header";
import ArtsLogo from "../images/Logos/AdvaithArts.png";
import Logos from "../components/arts/Logos";

const Arts: React.FC = () => {
  return (
    <div>
      <Header title="arts" logo={ArtsLogo} tabs={["logos", "films", "other"]} />
      <div className="App">
        <Logos />
      </div>
      <Footer />
    </div>
  );
};

export default Arts;
