import "./Box.css";
// import { useState } from "react";

function Box(props) {
  //   const [on, setOn] = useState(props.on);
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  //   function flipBoxColor() {
  //     setOn((prevOn) => !prevOn);
  //   }

  return (
    <div
      style={styles}
      className="box-container"
      //   onClick={() => props.toggle(props.id)}
      //   onClick={props.toggle}
      onClick={props.toggle}
    >
      {/* <h1 className="box-heading">Box</h1> */}
    </div>
  );
}

export default Box;
