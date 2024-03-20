import "./App.css";
import Box from "./component/Box";
import Button from "./component/Button";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://i.pinimg.com/564x/8a/27/c6/8a27c6f15db4d22073a4835fcb5e7208.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://i.pinimg.com/564x/f8/83/14/f88314e5aa39f2faa0c314b1d95eda8a.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://i.pinimg.com/564x/fa/8d/4d/fa8d4dcc3eed46c789be966047ad8637.jpg",
  },
  userDefault: {
    name: "Choose",
    img: "/you.png",
  },
  computerDefault: {
    name: "Waiting",
    img: "https://i.pinimg.com/474x/8f/3e/24/8f3e2418d915732326e87ec14085b4d2.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(choice.userDefault);
  const [computerSelect, setComputerSelect] = useState(choice.computerDefault);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const judgement = (computer, user) => {
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

  const play = (userChoice) => {
    const user = choice[userChoice];
    const computer = randomChoice();
    setUserSelect(user);
    setComputerSelect(computer);
    const gameResult = judgement(computer, user);
    setResult(gameResult);

    if (gameResult === "Win") {
      setScore({ ...score, user: score.user + 1 });
    } else if (gameResult === "Lose") {
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  const randomChoice = () => {
    const keys = Object.keys(choice).filter(
      (key) => key !== "userDefault" && key !== "computerDefault"
    );
    const randomNum = Math.floor(Math.random() * keys.length);
    return choice[keys[randomNum]];
  };

  const resetGame = () => {
    setUserSelect(choice.userDefault);
    setComputerSelect(choice.computerDefault);
    setResult("");
    setScore({ user: 0, computer: 0 });
  };

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
          <Button onClick={resetGame} title="Reset" className="reset-button" />
        </div>
        <div className="buttons">
          <Button onClick={() => play("rock")} title="Rock" />
          <Button onClick={() => play("paper")} title="Paper" />
          <Button onClick={() => play("scissors")} title="Scissors" />
        </div>
      </div>
    </div>
  );
}

export default App;
