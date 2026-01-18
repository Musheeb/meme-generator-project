import "./Boxes.css";
import { useState } from "react";
import boxesArray from "../../boxes";

function Boxes(props) {
  const [boxArray, setBoxArray] = useState(boxesArray);
  const styles = {
    // backgroundColor: boxArray.length % 2 ? "#222222" : "blue",
    backgroundColor: props.darkMode ? "#222222" : "#cccccc",
    // borderRadius: "100px"
  };
  const boxes = boxArray.map((box) => {
    return <div style={styles} className="box-container" key={box.id}></div>;
  });
  return <div>{boxes}</div>;
}

export default Boxes;
