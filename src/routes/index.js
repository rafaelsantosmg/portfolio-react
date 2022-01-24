import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../components";
import Resume from "../components/Resume";
import About from '../components/About';
import Portfolio from "../components/Portfolio";
// import Contact from "../components/Contact";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/resume" component={ Resume } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/portfolio" component={ Portfolio } />
      {/* <Route exact path="/contact" component={ Contact } /> */}
    </Switch>
  );
}
