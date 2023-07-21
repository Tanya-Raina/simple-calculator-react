import React from "react";
import "./CalculatorButton.css";

function CalculatorButton({ value, onClick }) {
  return (
    <button className="calculator-button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default CalculatorButton;
