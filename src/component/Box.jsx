import React from "react";
// import "../App.css";

const Box = ({ title, item, result }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img className="item-img" src={item?.img} alt={item ? item.name : ""} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
