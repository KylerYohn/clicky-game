import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class app extends Component {
  state = {
    friends
  };
  render() {
    return (
      <Wrapper>
        {this.state.friends.map(friends => (
          <FriendCard image={friends.image} />
        ))}
      </Wrapper>
    );
  }
}

export default app;
