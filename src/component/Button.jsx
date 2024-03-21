import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, title, className } = this.props;
    return (
      <button onClick={onClick} className={className}>
        {title}
      </button>
    );
  }
}

export default Button;
