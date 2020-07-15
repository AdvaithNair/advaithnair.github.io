import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Tech from "./components/Tech";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Tech />
      </div>
      <Footer />
    </div>
  );
};

export default App;
