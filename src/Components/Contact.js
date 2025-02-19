import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
    } else {
      console.log("Email submitted:", email);
    }
  };

  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="email"
          placeholder="yourmail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
