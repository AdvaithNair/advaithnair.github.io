import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Me from "./components/about/Me";
import Films from "./components/arts/Films";
import Logos from "./components/arts/Logos";
import Projects from "./components/code/Projects";
import Tech from "./components/code/Tech";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./css/App.css";
import MainLogo from "./images/Logos/AdvaithLogo.png";
import Aglet from "./pages/Aglet";
import Append from "./pages/Append";
import Rant from "./pages/Rant";

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
          <Route exact path="/projects/rant" component={Rant} />
          <Route exact path="/projects/aglet" component={Aglet} />
          <Route exact path="/projects/append" component={Append} />
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
