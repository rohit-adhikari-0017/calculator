import React from "react";
import Style from "./DisplayBox.module.css";

export default function DisplayBox({ displayVal }) {
  return (
    <>
      <div className={`${Style.displayBox}`}>
        <input
          className={`${Style.textDisplay}`}
          id="display"
          value={displayVal}
          readOnly
        ></input>
      </div>
    </>
  );
}
