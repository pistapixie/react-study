import React from "react";
import "../App.css";

const Box = ({ title, item, result, score }) => {
  const boxClass =
    result === "Win" ? "box win" : result === "Lose" ? "box lose" : "box";
  return (
    <div className={boxClass}>
      <h1>{title}</h1>
      {item && <img className="item-img" src={item.img} alt={item.name} />}
      <h2>{result}</h2>
      <h3>Score: {score}</h3>
    </div>
  );
};

export default Box;
