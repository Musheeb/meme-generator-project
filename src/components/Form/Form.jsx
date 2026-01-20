import "./Form.css";
import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setFirstName((prevFirstName) => {
      return event.target.value;
    });
  }

  return (
    <form action="" className="form">
      <input type="text" placeholder="First Name" onChange={handleChange} />
    </form>
  );
}

export default Form;
