import React from "react";

class ClickerGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  changeScore = () => {
    this.setState((prevState) => {
      return { score: prevState.score + 1 };
    });
  };

  render() {
    return <h1>Current Score: {this.state.score}</h1>;
  }
}

export default ClickerGame;
