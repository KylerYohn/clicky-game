import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div style={{ margin: 0 }} className="jumbotron">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d949acd3-b5f8-4e46-ab5a-60d4ee15beb2/dbiqq3c-5559ddf6-1bd7-4c19-a9ca-13ebf7b47c9a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5NDlhY2QzLWI1ZjgtNGU0Ni1hYjVhLTYwZDRlZTE1YmViMlwvZGJpcXEzYy01NTU5ZGRmNi0xYmQ3LTRjMTktYTljYS0xM2ViZjdiNDdjOWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CGRnlCIteN_9N1n6LRy7tSdIWugvmlqH-WQrrs-8UIo"
        alt=""
        id="jojo"
      />
      <h1 className="display-4">Jojo's Bizarre Clicky-Game </h1>
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
