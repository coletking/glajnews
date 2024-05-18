"use client";
import React, { useState } from "react";
import "./MyCss.css";
import { Alert, Form, Button } from "react-bootstrap";
import {getusers } from "../Services/GetUser.service";

function Login() {
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const login = async (email, passoword) => {
    if (email === "" || passoword === "") {
      window.alert("error parse");
      return;
    }

    await getusers(email, (res) => {
      let data = res[0];
      if (!data) {
        window.alert("no user found");
      }
      window.localStorage.setItem("token", data.id);
      setmessage("Login successful");
      window.location.href ="/auth/dashboard/admin";
    });
  };

  const handleLogin = async () => {
    try {
      setloading(true);
      await login(email, password);
    } catch (error) {
      setmessage(error.message);
    }
    setloading(false);
  };

  // const handleRegister = () => {
  //   history.push("/auth/register");
  // };

  // const handleResetPassword = () => {
  //   history.push("/auth/forget_password");
  // };

  return (
    <>
      <div
        className="backgroisns"
        style={{ backgroundImage: "url(/img/newpac.jpg)" }}
      >
        <div className="usercontainerbody">
          <div className="usercontainer">
            <div className="userheader">Login</div>
            {message ? (
              <Alert variant="info">
                <p>{message}</p>
              </Alert>
            ) : (
              ""
            )}

            <Form>
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

              {/* <Form.Text className="text-muted">
      <span>Don't have an account?</span> <span className="act" onClick={handleRegister}>Register</span> <br/>
        </Form.Text>

        <Form.Text className="text-muted">
        <span>Forget password?</span>{" "}
            <span className="act" onClick={handleResetPassword}>
              Reset Password
            </span> <br/>
        </Form.Text> */}

              <Button
                variant="dark"
                type="submit"
                onClick={handleLogin}
                disabled={loading}
                className="w-100 py-2 my-2"
              >
                {loading ? "Please Wait .." : "Login ..."}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
