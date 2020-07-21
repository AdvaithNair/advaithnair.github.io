import React from "react";
import "../App.css";
import Header from "../components/Header";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import Secret from "../components/Secret";
import Footer from "../components/Footer";

const Code: React.FC = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <Projects />
        <Tech />
        <Socials />
        <Secret />
      </div>
      <Footer />
    </div>
  );
};

export default Code;
