import React from "react";
import "./Button.css";

function Button({ text, color, backgroundColor, onClick, type }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
