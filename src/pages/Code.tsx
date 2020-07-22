import React from "react";
import "../App.css";
import Header from "../components/Header";
import CodeHeader from "../components/code/CodeHeader";
import Tech from "../components/code/Tech";
import Projects from "../components/code/Projects";
import Socials from "../components/code/Socials";
import Secret from "../components/code/Secret";
import Footer from "../components/code/Footer";
import CodeLogo from '../images/Logos/AdvaithLogo.png';

const Code: React.FC = () => {
  return (
    <div>
      <Header title="code" logo={CodeLogo} tabs={['projects', 'tech', 'socials']} />
      <div className="App">
        {/*<CodeHeader />*/}
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
