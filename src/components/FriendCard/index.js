import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="img-container">
      <img
        style={{ width: 200, height: 200 }}
        className="img-thumbnail"
        alt={props.name}
        src={props.image}
      />
    </div>
  );
}

export default FriendCard;
