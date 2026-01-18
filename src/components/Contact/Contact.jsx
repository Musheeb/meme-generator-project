import "./Contact.css";
import { useState } from "react";
import Star from "../Star/Star.jsx";

function Contact() {
  const [contact, setContact] = useState({
    firstName: "Frank",
    lastName: "Castle",
    phone: "+91-8088998899",
    email: "frankie@gmail.com",
    isFavorite: false,
  });

  function changeUserStatus() {
    setContact(function (prevContactDetails) {
      return {
        ...prevContactDetails,
        isFavorite: !prevContactDetails.isFavorite,
      };
    });
  }

  return (
    <div className="contact-container">
      <img
        src="/user-icon.webp"
        alt="user-image"
        className="contact-user-image"
      />
      <div className="contact-user-info">
        <Star isFilled={contact.isFavorite} handleClick={changeUserStatus} />
        <h4>
          {contact.firstName} {contact.lastName}
        </h4>
        <h4>{contact.phone}</h4>
        <h4>{contact.email}</h4>
      </div>
    </div>
  );
}

export default Contact;
