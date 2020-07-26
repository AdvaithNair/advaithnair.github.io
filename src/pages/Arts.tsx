import React from "react";
import "../App.css";
import Footer from "../components/code/Footer";
import Header from "../components/Header";
import ArtsLogo from "../images/Logos/AdvaithArts.png";
import Logos from "../components/arts/Logos";
import Films from '../components/arts/Films';

const Arts: React.FC = () => {
  return (
    <div>
      <Header title="arts" logo={ArtsLogo} tabs={["logos", "films", "other"]} />
      <div className="App">
        <Logos />
        <Films />
      </div>
      <Footer />
    </div>
  );
};

export default Arts;
