import React from "react";

const Button = ({ onClick, title }) => {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
