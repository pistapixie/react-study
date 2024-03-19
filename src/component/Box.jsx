import React from "react";
// import "../App.css";

const Box = ({ title, item }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img className="item-img" src={item?.img} alt={item ? item.name : ""} />
      <h2>win</h2>
    </div>
  );
};

export default Box;
