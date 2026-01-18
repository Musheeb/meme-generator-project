import "./AddItems.css";
import { useState } from "react";

function AddItems() {
  const itemsArray = ["Thing 1", "Thing 2", "Thing 3"];
  const [initialArray, setInitialArray] = useState(itemsArray);
  function addItem() {
    setInitialArray(function (prevArray) {
      //   const latestValue = prevArray[prevArray.length - 1];
      //   console.log("Latest Value", latestValue);
      //   const numberFromLatestValue = latestValue.split(" ")[1];
      //   console.log(numberFromLatestValue);
      //   prevArray.push(`Thing ${parseInt(numberFromLatestValue) + 1}`);
      //   return prevArray;
      return [...prevArray, `Thing ${prevArray.length + 1}`];
    });
  }
  return (
    <div className="item-state" onClick={addItem}>
      <hr />
      {initialArray.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
}

export default AddItems;
