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
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    judgement(computerChoice, choice[userChoice]);
  };

  const judgement = (computer, user) => {
    console.log("user:", user, "computer:", computer);
    if (user.name === computer.name) {
      setResult("Tie");
    } else if (user.name === "Rock") {
      setResult(computer.name === "Scissors" ? "Win" : "Lose");
    } else if (user.name === "Scissors") {
      setResult(computer.name === "Paper" ? "Win" : "Lose");
    } else if (user.name === "Paper") {
      setResult(computer.name === "Rock" ? "Win" : "Lose");
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <div>
      <div className="main">
        <Box title="Meow" item={computerSelect} />
        <Box title="You" item={userSelect} result={result} />
      </div>
      <Button onClick={() => play("scissors")} title="가위" />
      <Button onClick={() => play("rock")} title="바위" />
      <Button onClick={() => play("paper")} title="보" />
    </div>
  );
}

export default App;
