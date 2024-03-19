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
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <Button onClick={() => play("scissors")} title="가위" />
      <Button onClick={() => play("rock")} title="바위" />
      <Button onClick={() => play("paper")} title="보" />
    </div>
  );
}

export default App;
