import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Code from "./pages/Code";
import Art from "./pages/Art";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path="/code" component={Code} />
        <Route exact path="/art" component={Art} />
      </Switch>
    </Router>
  );
};

export default App;
