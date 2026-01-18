import React from "react";
import "./State.css";
import Count from "../Count/Count.jsx";

function StateManagement() {
  const [count, setCount] = React.useState(0);

  function plusCount() {
    setCount(function (oldValue) {
      return oldValue + 1;
    });
  }

  function minusCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <h1>-----------------</h1>
      <button className="button-minus" onClick={minusCount}>
        -
      </button>
      <Count number={count} />
      <button className="button-plus" onClick={plusCount}>
        +
      </button>
      <h1>-----------------</h1>
    </div>
  );
}

export default StateManagement;
