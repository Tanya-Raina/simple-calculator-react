import React from "react";
import CalculatorButton from "./CalculatorButton";
import "./Calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = React.useState("");
  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleCalculate = () => {
    try {
        setDisplayValue(eval(displayValue.toString()));
    } catch (error) {
        setDisplayValue("Error");
    }
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const buttonValues = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "=",
    "/",
    "C",
  ];

  return (
    <div className="calculator">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-keypad">
        {buttonValues.map((value) => (
            value === "=" ? <CalculatorButton
            className="calculator-button"
            key={value}
            value={value}
            onClick={handleCalculate}
            /> : value === "C" ? <CalculatorButton
            className="calculator-button"
            key={value}
            value={value}
            onClick={handleClear}
            /> :

          <CalculatorButton
            className="calculator-button"
            key={value}
            value={value}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
