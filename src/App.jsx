import "./App.css";
import Header from "./components/Header/Header.jsx";
import Meme from "./components/Meme/Meme.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AddItemsNew from "./components/AddItemsNew/AddItemsNew.jsx";
import StateManagement from "./components/StatePractice/State.jsx";
import TernaryWithState from "./components/TernaryWithState/TernaryWithState.jsx";
import AddItems from "./components/AddItems/AddItems.jsx";
import Boxes from "./components/Boxes/Boxes.jsx";
import Box from "./components/Box/Box.jsx";

import boxData from "./boxes.js";
import { useState } from "react";

function App() {
  const [square, setSquare] = useState(boxData);

  function toggle(id) {
    console.log(id);
    setSquare((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : { ...square };
      });
    });
  }
  // const [squares, setSquares] = useState(boxData);

  // function toggle(id) {
  //   // console.log(id);
  //   setSquares((prevSquares) => {
  //     return prevSquares.map((square) => {
  //       return square.id === id ? { ...square, on: !square.on } : { ...square };
  //       // if (square.id === id) {
  //       //   return {
  //       //     ...square,
  //       //     on: !square.on,
  //       //   };
  //       // }
  //       // return square;
  //     });
  //   });
  // }

  // const boxes = squares.map((data) => {
  //   return (
  //     <Box
  //       key={data.id}
  //       // id={data.id}
  //       on={data.on}
  //       toggle={() => toggle(data.id)}
  //     />
  //   );
  // });
  const boxes = square.map((data) => {
    return (
      <Box
        key={data.id}
        id={data.id}
        on={data.on}
        toggle={() => toggle(data.id)}
      />
    );
  });
  return (
    <div className="container-main">
      {boxes}
      {/* <Boxes darkMode={true} /> */}
      {/* <Header /> */}
      {/* <Meme /> */}
      {/* <Contact /> */}
      {/* <StateManagement />
      <AddItemsNew />f
      <TernaryWithState />
      <AddItems /> */}
    </div>
  );
}

export default App;
