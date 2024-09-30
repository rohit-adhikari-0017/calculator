import React, { useState } from "react";
import Style from "./Calculator.module.css";
import DisplayBox from "../displayBox/DisplayBox";
import CalculatorBtnBox from "../calculatorBtnBox/CalculatorBtnBox";

function Calculator() {
  let [displayVal, setDisplayVal] = useState("");
  function btnValue(btnText) {
    // console.log(i);
    if (btnText === "C") {
      setDisplayVal("");
    } else if (btnText === "=") {
      let totalResult = eval(displayVal);
      setDisplayVal(totalResult);
    } else {
      let newBtnText = displayVal + btnText;
      setDisplayVal(newBtnText);
    }
  }
  return (
    <>
      <div className={`${Style.Calculator}`}>
        <div className={`${Style.calculatorContainer} `}>
          <DisplayBox displayVal={displayVal} />
          <CalculatorBtnBox clickBtnVal={btnValue} />
        </div>
      </div>
    </>
  );
}

export default Calculator;
