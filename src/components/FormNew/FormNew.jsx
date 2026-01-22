import "./FormNew.css";
import { useState } from "react";

function FormNew() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isAlright: false,
    isDark: false,
    interest: "",
    favoriteColor: "",
  });
  //   console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitFormData(event) {
    event.preventDefault();
    console.log("Form submitted - ", formData);
  }

  return (
    <form className="form-new-container" onSubmit={submitFormData}>
      <label htmlFor="firstName">FirstName</label>
      <input
        type="text"
        id="firstName"
        placeholder="Enter you first name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <br />
      <label htmlFor="lastName">LastName</label>
      <input
        type="text"
        id="lastName"
        placeholder="Enter you last name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter you email"
        onChange={handleChange}
        value={formData.email}
      />
      <br />
      <textarea
        name="comment"
        id="comment"
        placeholder="comment..."
        onChange={handleChange}
        value={formData.comment}
      />
      <br />
      <input
        type="checkbox"
        id="isAlright-bro"
        name="isAlright"
        checked={formData.isAlright}
        onChange={handleChange}
      />
      <label htmlFor="isAlright-bro">Are you alright?</label>
      <br />
      <input
        type="checkbox"
        name="isDark"
        id="checkbox-isDark"
        checked={formData.isDark}
        onChange={handleChange}
      />
      <label htmlFor="checkbox-isDark">Is theme dark?</label>
      <fieldset>
        <legend>Select you interest!</legend>
        <input
          type="radio"
          id="radio-cricket"
          name="interest"
          value="cricket"
          onChange={handleChange}
          checked={formData.interest === "cricket"}
        />
        <label htmlFor="radio-cricket">Cricket</label>
        <br />
        <input
          type="radio"
          id="radio-football"
          name="interest"
          onChange={handleChange}
          value="football"
          checked={formData.interest === "football"}
        />
        <label htmlFor="radio-football">Football</label>
        <br />
        <input
          type="radio"
          id="radio-vollyball"
          name="interest"
          onChange={handleChange}
          value="vollyball"
          checked={formData.interest === "vollyball"}
        />
        <label htmlFor="radio-vollyball">Vollyball</label>
        <br />
        <input
          type="radio"
          id="radio-hockey"
          name="interest"
          onChange={handleChange}
          value="hockey"
          checked={formData.interest === "hockey"}
        />
        <label htmlFor="radio-hockey">Hockey</label>
        <br />
        <input
          type="radio"
          id="radio-kabaddi"
          name="interest"
          onChange={handleChange}
          value="kabaddi"
          checked={formData.interest === "kabaddi"}
        />
        <label htmlFor="radio-kabaddi">Kabaddi</label>
        <br />
      </fieldset>
      <label htmlFor="favColor">Choose your favorite color</label>
      <select
        name="favoriteColor"
        id="favColor"
        onChange={handleChange}
        value={formData.favoriteColor}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="violet">Violet</option>
        <option value="purple">Purple</option>
        <option value="tomato">Tomato</option>
        <option value="pink">Pink</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default FormNew;
