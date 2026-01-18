import "./AddItemsNew.css";
import { useState } from "react";

function AddItemsNew() {
  const [thingsArray, setThingsArray] = useState([
    "Thing 1",
    "Thing 2",
    "Thing 3",
  ]);
  function addItemsInThingsArray() {
    setThingsArray(function (prevArray) {
      return [...prevArray, `Thing ${prevArray.length + 1}`];
    });
  }
  return (
    <div className="container--addItems">
      <button className="button-addItems" onClick={addItemsInThingsArray}>
        Add Item
      </button>
      {thingsArray.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
}

export default AddItemsNew;
