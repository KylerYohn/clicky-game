import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="img-container">
      <img
        style={{
          marginBottom: 30,
          width: 188,
          height: 188,
          background: "#9a3192"
        }}
        className="img-thumbnail"
        alt={props.name}
        src={props.image}
        onClick={() => props.scoreUpdate(props.id)}
      />
    </div>
  );
}

export default FriendCard;
