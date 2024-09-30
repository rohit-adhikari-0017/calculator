import React from "react";
import Style from "./CalculatorBtnBox.module.css";

function CalculatorBtnBox({ clickBtnVal }) {
  const btnValName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={`${Style.calculatorBtnBox}`}>
        {btnValName.map((valName) => (
          <button
            key={valName}
            className={`${Style.calculatorBtn}`}
            onClick={() => clickBtnVal(valName)}
          >
            {valName}
          </button>
        ))}
      </div>
    </>
  );
}

export default CalculatorBtnBox;
