"use client";
import React, { useState } from "react";
import "../styles/contact.css";
import Navbar from "./Navbar";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getRandomString } from "../../Services/GetRandomNumber";
import { database } from "../../firebase";
function ContactUS() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const worg = name === "" || phone === "" || message === "" || email === "";
    if (worg) {
      window.alert("value missing");
      return;
    }
    setloading(true);
    const messID = getRandomString(
      30,
      "1234567890qwertyuiopasdfhjklzxcvbnmQWERTYUIOPASDFHJKLZXCVBNM"
    );

    try {
      const data = {
        id: messID,
        name: name,
        email: email,
        phone: phone,
        message: message,
        blogid: messID,
        is_seen: false,
        createdAt: serverTimestamp(),
      };
      await setDoc(doc(database, "contact", data.id), data).then((result) => {
        window.alert("message sent Successfully");
      });
    } catch (error) {
      window.alert(error.message);
    }
    setemail("");
    setMessage("");
    setname("");
    setphone("");
    setloading(false);
  };
  return (
    <>
      <Navbar />
      <div className="wrapperclass">
        <div class="container-main">
          <div class="form-container">
            <div class="left-container">
              <div class="left-inner-container">
                <h2>Let's Chat</h2>
                <p>
                  Whether you have a question, want to advertise or simply want
                  to connect.
                </p>
                <br />
                <p>Feel free to send me a message in the contact form</p>
              </div>
            </div>
            <div class="right-container">
              <div class="right-inner-container">
                <form action="#">
                  <h2 class="lg-view">Contact</h2>
                  <h2 class="sm-view">Let's Chat</h2>
                  <p>* Required</p>
                  <div class="social-container">
                    <a href="#" class="social">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" class="social">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <input
                    type="text"
                    placeholder="Name *"
                    onChange={(event) => {
                      setname(event.target.value);
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                  />
                  <input
                    type="phone"
                    placeholder="Phone"
                    onChange={(event) => {
                      setphone(event.target.value);
                    }}
                  />
                  <textarea
                    rows="4"
                    placeholder="Message"
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                  ></textarea>
                  <button onClick={handleSubmit} disabled={loading}>
                    {loading ? "sending Message..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
