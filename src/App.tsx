import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import About from "./pages/About";
import Code from "./pages/Code";
import Arts from "./pages/Arts";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/code" component={Code} />
        <Route exact path="/art" component={Arts} />
      </Switch>
    </Router>
  );
};

export default App;
