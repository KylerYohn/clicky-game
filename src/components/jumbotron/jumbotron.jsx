import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div style={{ margin: 0 }} className="jumbotron">
      <h1 className="display-4">Jojo's Bizarre Clicky-Game</h1>
      <p className="lead">
        This is a game that will test your memory skills. Your goal is to click
        as many pictures as you can, but you can't click the same picture more
        than once or else you lose. However, for each new image you click you
        get a point! How high can you score?
      </p>
    </div>
  );
}

export default Jumbotron;
