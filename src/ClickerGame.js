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
    this.setState(() => {
        if (this.state.score < 10) {
            alert("Score is too low");
        } else {
            this.setState ({increment: this.setState.increment + 1});
            this.setState({increase: this.setState.increase + 1});
            this.setState({score: this.setState.score - 10})
             }  
    });
  };

//   payTenBtn = () => {
//     this.setState((prevState) => {
//       return {
//         increment: prevState.increment + 1,
//         increase: prevState.increase + 1,
//       };
//     });
//   };

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
