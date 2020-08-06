import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/code/Projects";
import Tech from "./components/code/Tech";
import Footer from "./components/Footer";
import MainLogo from "./images/Logos/AdvaithLogo.png";
import Me from "./components/about/Me";
import Logos from "./components/arts/Logos";
import Films from "./components/arts/Films";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Header
        title="advaith"
        logo={MainLogo}
        tabs={["about", "projects", "tech", "logos", "films"]}
      />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Me} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/tech" component={Tech} />
          <Route exact path="/logos" component={Logos} />
          <Route exact path="/films" component={Films} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
