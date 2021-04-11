import React from "react";

class ClickerGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0, increment: 1, increase: 2 };
  }

  updateScoreBtn = () => {
    this.setState((prevState) => {
      return { score: prevState.score + prevState.increment };
    });
  };

  payTenBtn = () => {
    this.setState((prevState) => {
        if (prevState.score < 10)
      return {
        increment: prevState.increment + 1,
        increase: prevState.increase + 1,
        score: prevState.score - 10
      };
    });
  };

  render() {
    return (
      <section>
        <h1>Current Score: {this.state.score}</h1>
        <button onClick={this.updateScoreBtn}>+{this.state.increment}</button>
        <button onClick={this.payTenBtn}>
          Pay 10 points to change from +{this.state.increment} to +
          {this.state.increase}
        </button>
      </section>
    );
  }
}

export default ClickerGame;
