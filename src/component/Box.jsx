import React, { Component } from "react";
import "../App.css";

class Box extends Component {
  render() {
    const { title, item, result, score } = this.props;
    const boxClass =
      result === "Win" ? "box win" : result === "Lose" ? "box lose" : "box";

    return (
      <div className={boxClass}>
        <h1>{title}</h1>
        {item && (
          <img
            className={`item-img ${result === "Win" ? "win" : ""}`}
            src={item.img}
            alt={item.name}
          />
        )}
        <h2>{result}</h2>
        <h3>Score: {score}</h3>
      </div>
    );
  }
}
export default Box;
