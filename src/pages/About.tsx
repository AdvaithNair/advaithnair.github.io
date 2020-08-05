import React from "react";
import "../App.css";
import Header from "../components/Header";
import Me from "../components/about/Me";
import Socials from "../components/code/Socials";
import Footer from "../components/Footer";
import AboutLogo from '../images/Logos/AdvaithLogo.png';

const About: React.FC = () => {
  return (
    <div>
      <Header title="about" logo={AboutLogo} tabs={['me', 'resume', 'socials']} />
      <div className="App">
        <Me />
        <Socials />
      </div>
      <Footer />
    </div>
  );
};

export default About;
