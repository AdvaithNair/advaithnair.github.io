import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Code from "./pages/Code";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path="/code" component={Code} />
      </Switch>
    </Router>
  );
};

export default App;
