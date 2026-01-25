import "./UseEffect.css";
import { useState, useEffect } from "react";

export default function UseEffect() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);
  function addCount() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  function subtractCount() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }
  console.log("Component rendered");
  useEffect(() => {
    console.log("Effect function ran");
    // fetch("https://api.imgflip.com/get_memes")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div className="count-container">
      <button onClick={subtractCount}>-</button>
      <h1>The count is {count}</h1>
      <button onClick={addCount}>+</button>
      <button className="button-get-new-data" onClick={addCount}>
        Generate new data
      </button>
      <div>
        {/* <h1>Name : {starWarsData.name}</h1> */}
        {JSON.stringify(starWarsData, null, 2)}
      </div>
    </div>
  );
}
