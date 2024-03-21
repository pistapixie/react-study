import React, { Component } from "react";
import "./App.css";
import Box from "./component/Box";
import Button from "./component/Button";
import { choice } from "./choice";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: choice.userDefault,
      computerSelect: choice.computerDefault,
      result: "",
      score: { user: 0, computer: 0 },
    };
  }

  judgement = (computer, user) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (
      (user.name === "Rock" && computer.name === "Scissors") ||
      (user.name === "Scissors" && computer.name === "Paper") ||
      (user.name === "Paper" && computer.name === "Rock")
    ) {
      return "Win";
    } else {
      return "Lose";
    }
  };

  play = (userChoice) => {
    const user = choice[userChoice];
    const computer = this.randomChoice();
    this.setState(
      {
        userSelect: user,
        computerSelect: computer,
        result: this.judgement(computer, user),
      },
      () => {
        const { result, score } = this.state;
        if (result === "Win") {
          this.setState({ score: { ...score, user: score.user + 1 } });
        } else if (result === "Lose") {
          this.setState({ score: { ...score, computer: score.computer + 1 } });
        }
      }
    );
  };

  randomChoice = () => {
    const keys = Object.keys(choice).filter(
      (key) => key !== "userDefault" && key !== "computerDefault"
    );
    const randomNum = Math.floor(Math.random() * keys.length);
    return choice[keys[randomNum]];
  };

  resetGame = () => {
    this.setState({
      userSelect: choice.userDefault,
      computerSelect: choice.computerDefault,
      result: "",
      score: { user: 0, computer: 0 },
    });
  };

  render() {
    const { userSelect, computerSelect, result, score } = this.state;
    return (
      <div className="bg">
        <h1 className="title">🏔️ Moomin Valley: Hands Clash</h1>
        <div className="main">
          <Box
            title="Moomintroll"
            item={computerSelect}
            result={
              result
                ? result === "Win"
                  ? "Lose"
                  : result === "Tie"
                  ? "Tie"
                  : "Win"
                : ""
            }
            score={score.computer}
          />
          <Box
            title="Little My"
            item={userSelect}
            result={result}
            score={score.user}
          />
        </div>
        <div className="button-container">
          <div className="reset-container">
            <Button
              onClick={this.resetGame}
              title="Reset"
              className="reset-button"
            />
          </div>
          <div className="buttons">
            <Button onClick={() => this.play("rock")} title="Rock" />
            <Button onClick={() => this.play("paper")} title="Paper" />
            <Button onClick={() => this.play("scissors")} title="Scissors" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
