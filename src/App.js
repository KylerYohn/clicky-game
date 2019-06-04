import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class app extends Component {
  state = {
    friends,
    score: 0
  };

  gameOver = () => {
    this.setState({ score: 0 });
    // eslint-disable-next-line
    this.state.friends.map((friends, i) => {
      // eslint-disable-next-line
      this.state.friends[i].clicked = false;
    });
  };

  scoreUpdate = id => {
    //store the friend that was clicked in an array of its own
    const friendClicked = this.state.friends.filter(friend => friend.id === id);

    //check and see if the friend was clicked before
    if (friendClicked[0].clicked === false) {
      //sort through the array to find the friend at the proper index of the array and update its value of clicked to true
      // eslint-disable-next-line
      this.state.friends.find((friend, i) => {
        if (friend.id === id) {
          // eslint-disable-next-line
          this.state.friends[i].clicked = true;
        }
        this.setState({ score: this.state.score + 1 });
      });
      this.state.friends.sort(() => Math.random() - 0.5);
    } else {
      this.gameOver();
    }
  };

  // console.log(id);

  render() {
    return (
      <Wrapper score={this.state.score}>
        {this.state.friends.map(friends => (
          <FriendCard
            scoreUpdate={this.scoreUpdate}
            image={friends.image}
            key={friends.id}
            id={friends.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default app;
