import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Routes from "./routes";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Routes />
    </React.Fragment>
  );
}

export default App;
