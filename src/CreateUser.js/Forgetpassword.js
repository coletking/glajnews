'use client'
import React from "react";
import "./MyCss.css";
import { useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Forgetpassword() {
  const router =  useRouter()
  const [message, setmessage] = useState("");
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const handleResetPassword = () => {};


  const hanelergsiter = () => {
    router.push("/auth/Register");
  };

  const handlelogin = () => {
    router.push("/auth/Login");
  };
  return (
    <div>
      
      <div className="backgroisns"  style={{ backgroundImage: "url(/img/newpac.jpg)" }}>
        <div className="usercontainerbody">
          <div className="usercontainer">
            <div className="userheader">Reset Password</div>
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

              <Form.Text className="text-muted">
                <p>
                  I can now remember my password{" "}
                  <span className="act" onClick={handlelogin}>
                    login
                  </span>
                </p>
                <p>
                  {" "}
                  Dont Have an Account?{" "}
                  <span className="act" onClick={hanelergsiter}>
                    Register
                  </span>
                </p>
              </Form.Text>

              <Button
                variant="dark"
                type="submit"
                onClick={handleResetPassword}
                disabled={loading}
                className="w-100 py-2 my-2"
              >
                {loading ? "Please Wait .." : "Proceed ..."}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpassword;
