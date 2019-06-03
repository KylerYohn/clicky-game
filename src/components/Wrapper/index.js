import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="parent">
      <h2>Your score is: {props.score}</h2>
      <div className="wrapper">{props.children}</div>);
    </div>
  );
}

export default Wrapper;
