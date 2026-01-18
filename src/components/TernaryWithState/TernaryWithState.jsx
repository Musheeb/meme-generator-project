import "./TernaryWithState.css";
import { useState } from "react";

function TernaryWithState() {
  const [isGoingOut, setValue] = useState(true);
  function changeValue() {
    setValue(function (prevValue) {
      return !prevValue;
    });
  }
  return (
    <div className="state">
      <hr />
      <h1>Should I go out? </h1>
      <div className="state--value" onClick={changeValue}>
        <h1>{isGoingOut ? "YES" : "NO"}</h1>
      </div>
    </div>
  );
}

export default TernaryWithState;
