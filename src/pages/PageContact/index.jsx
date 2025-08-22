import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./index.scss";

function PageContact() {
  return (
    <div>
      <Header />
      <div className="contact-container ">
        <h2>
         Let's connect if you love programming as much as I do.
        </h2>
        <form className="contact-container__form-contact" action="">
          <h3 id="title">Contact me</h3>
          <label for="name">Full name</label>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Enter your name..."
            required
          ></input>

          <label for="phone">Phone number</label>
          <input
            className="input"
            type="tel"
            id="phone"
            placeholder="Enter your phone number...."
            required
          ></input>

          <label for="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            placeholder="Enter email..."
            required
          ></input>
          <label for="message">Message:</label>
          <textarea className="textarea" id="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default PageContact;
