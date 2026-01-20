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
import Joke from "./components/Joke/Joke.jsx";
import Form from "./components/Form/Form.jsx";

// import boxData from "./boxes.js";
import jokes from "./jokes.js";
import { useState } from "react";

function App() {
  // const [messages, setMessages] = useState(["a", "b", "c"]);
  // const [joke, setJoke] = useState(jokes);
  // function flipPunchLine(id) {
  //   console.log(id);
  //   setJoke((prevJoke) => {
  //     return prevJoke.map((jk) => {
  //       return jk.id === id ? { ...jk, isShown: !jk.isShown } : { ...jk };
  //     });
  //   });
  // }
  // const jokesData = joke.map((joke) => {
  //   return (
  //     <Joke
  //       key={joke.id}
  //       {...joke}
  //       flipPunchLine={() => flipPunchLine(joke.id)}
  //     />
  //   );
  // });

  // const [square, setSquare] = useState(boxData);
  // function toggle(id) {
  //   // console.log(id);
  //   setSquare((prevSquare) => {
  //     return prevSquare.map((square) => {
  //       return square.id === id ? { ...square, on: !square.on } : { ...square };
  //     });
  //   });
  // }
  // const [square, setSquare] = useState(boxData);

  // function toggle(id) {
  //   console.log(id);
  //   setSquare((prevSquare) => {
  //     return prevSquare.map((square) => {
  //       return square.id === id ? { ...square, on: !square.on } : { ...square };
  //     });
  //   });
  // }
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
  // const boxes = square.map((data) => {
  //   return (
  //     <Box
  //       key={data.id}
  //       id={data.id}
  //       on={data.on}
  //       toggle={() => toggle(data.id)}
  //     />
  //   );
  // });
  // const boxes = square.map((data) => {
  //   return (
  //     <Box
  //       key={data.id}
  //       on={data.on}
  //       toggle={() => toggle(data.id)}
  //       id={data.id}
  //     />
  //   );
  // });
  return (
    <div className="container-main">
      <Form />

      {/* {messages.length ? (
        <h1>
          You have {messages.length} unread message
          {messages.length > 1 ? "s" : ""}
        </h1>
      ) : (
        <h1>You are all caught up!</h1>
      )} */}

      {/* {jokesData} */}
      {/* {boxes} */}
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
