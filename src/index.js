import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Jumbotron from "./components/jumbotron/jumbotron";
import "./index.css";

ReactDOM.render(
  <div>
    <Jumbotron />
    <App />{" "}
  </div>,

  document.getElementById("root")
);
