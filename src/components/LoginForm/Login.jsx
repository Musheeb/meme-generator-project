import "./Login.css";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });
  console.log(formData);

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm password should be same!");
      return;
    }
    if (formData.newsletter) {
      alert("Thank you for signing up for our newsletter!");
    }
    if (formData.email && formData.password && formData.confirmPassword) {
      alert("Successfully logged in!");
      return;
    }
    alert(`Email, Password, and Confirm password fields are mandatory`);
  }

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="input-box"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input-box"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="input-box"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            onChange={handleChange}
            checked={formData.newsletter}
          />
          <label htmlFor="newsletter">I want to join the newsletter</label>
        </div>
        <button className="button-submit">Submit</button>
      </form>
    </div>
  );
}
