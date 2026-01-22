import "./Form.css";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    areYouMad: false,
    areYouAvailable: true,
    areYouEvenAlive: false,
    employment: "",
    favSports: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    // console.log(event.target.value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitFormData(event) {
    event.preventDefault();
    console.log("Form sumitted with data - ", formData);
    //Call you API here to submit the form.
  }

  return (
    <form action="" className="form" onSubmit={submitFormData}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="enter your email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="Write you comment here..."
        onChange={handleChange}
        name="comment"
        value={formData.comment}
      />
      <div className="isFriendly-checkbox-wrapper">
        <input
          type="checkbox"
          name="isFriendly"
          id="isFriendly"
          className="checkbox-friendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>
      <div className="areYouMad-checkbox-wrapper">
        <input
          type="checkbox"
          id="areYouMad"
          name="areYouMad"
          checked={formData.areYouMad}
          onChange={handleChange}
        />
        <label htmlFor="areYouMad">Are you mad?</label>
      </div>
      <div className="areYouAvailable-checkbox-wrapper">
        <input
          type="checkbox"
          id="areYouAvailable"
          name="areYouAvailable"
          checked={formData.areYouAvailable}
          onChange={handleChange}
        />
        <label htmlFor="areYouAvailable">Are you available?</label>
      </div>
      <div className="areYouAlive-checkbox-wrapper">
        <input
          type="checkbox"
          id="areYouEvenAlive"
          name="areYouEvenAlive"
          checked={formData.areYouEvenAlive}
          onChange={handleChange}
        />
        <label htmlFor="areYouEvenAlive">Are you alive?</label>
      </div>
      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed-radio"
          name="employment"
          onChange={handleChange}
          value="unemployed"
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed-radio">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time-radio"
          name="employment"
          onChange={handleChange}
          value="part-time"
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time-radio">Part-time</label>
        <br />
        <input
          type="radio"
          id="full-time-radio"
          name="employment"
          onChange={handleChange}
          value="full-time"
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time-radio">Full-time</label>
      </fieldset>
      <br />
      <label htmlFor="favSports">Select your favorite sports</label>
      <select name="favSports" id="favSports" onChange={handleChange}>
        <option value="">-- Choose --</option>
        <option value="cricket">Cricket</option>
        <option value="football">Football</option>
        <option value="vollyball">Vollyball</option>
      </select>
      <button>Submit</button>
    </form>
  );
}

export default Form;
