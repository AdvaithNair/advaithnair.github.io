import React from "react";
import "../App.css";
import CodeHeader from "../components/code/CodeHeader";
import Tech from "../components/code/Tech";
import Projects from "../components/code/Projects";
import Socials from "../components/code/Socials";
import Secret from "../components/code/Secret";
import Footer from "../components/code/Footer";

const Code: React.FC = () => {
  return (
    <div>
      <div className="App">
        <CodeHeader />
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
