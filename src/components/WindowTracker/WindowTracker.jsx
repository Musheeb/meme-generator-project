import "./WindowTracker.css";

import { useState, useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function setWindowWidthFunc() {
      setWindowWidth(window.innerWidth);
    }
    console.log("Effect rendered");
    window.addEventListener("resize", setWindowWidthFunc);
    return () => {
      window.removeEventListener("resize", setWindowWidthFunc);
    };
  }, []);
  return (
    <div>
      <h1>Window Widhth : {windowWidth}</h1>
    </div>
  );
}
