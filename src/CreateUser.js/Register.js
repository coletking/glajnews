"use client";
import React, { useState } from "react";
import "./MyCss.css";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { Alert, Form, Button } from "react-bootstrap";
import { getRandomString } from "../Services/GetRandomNumber";
import {getusers } from "../Services/GetUser.service";

function Register() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");



  const handleLogin = () => {
    window.location.href = "/auth/login";
  };

  const hanelRegister = async (e) => {
    e.preventDefault();

    if (
      number === "" ||
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      setmessage("incomplet information");
      setmessage(message);
    } else {
      setmessage("");
    }

    if (password !== confirmpassword) {
      setmessage("passoword Mismatch");
      setmessage(message);
    } else {
      setmessage("");
    }
    getusers(email,(res)=>{
      const exist = res.filter((e)=e.email === email)[0]
      if (exist){
        window.alert("user already exist")
        return
      }
    })
    try {
      setloading(true);
      const messID = getRandomString(
        35,
        "1234567890qwertyuiopasdfhjklzxcvbnmQWERTYUIOPASDFHJKLZXCVBNM,"
      );
      const user = {
        id: messID,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: number,
        active: true,
        permission: "admin",
        wallet: 0,
        noBplog: 0,
        created: serverTimestamp(),
      };

      await setDoc(doc(database, "user", user.id), user).then((e) => {
          setmessage(
            "Great ! your registration was successful. Redirection in process .... 10%"
          );
          setInterval(() => {
            window.location.href = "/auth/login";
          }, 2000);
        })
        .catch((e) => {
          console.log(e.message)
        });
    } catch (error) {
      setmessage(error.message);
    }
    setloading(false);
  };
  return (
    <div>
      <div
        className="backgroisns"
        style={{ backgroundImage: "url(/img/newpac.jpg)" }}
      >
        <div className="usercontainerbody">
          <div className="usercontainer">
            <div className="userheader">Register</div>
            {message ? (
              <Alert variant="info">
                <p>{message}</p>
              </Alert>
            ) : (
              ""
            )}

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  onChange={(event) => {
                    setfirstname(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  onChange={(event) => {
                    setlastname(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="+123 - 999 - 999"
                  onChange={(event) => {
                    setnumber(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setconfirmpassword(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Text className="text-muted">
                <span>Alreading have an account?</span>{" "}
                <span className="act" onClick={handleLogin}>
                  Login
                </span>
              </Form.Text>

              <Button
                variant="dark"
                type="submit"
                onClick={hanelRegister}
                disabled={loading}
                className="w-100 py-2 my-2"
              >
                {loading ? "Loading ..." : "Register"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
