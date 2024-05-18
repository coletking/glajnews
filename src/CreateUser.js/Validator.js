'use client'
import React, { useEffect, useState } from "react";
import { useAuth } from "../CreateUser.js/UserAuth";
import { database } from "../firebase";

import firebase from "firebase";
import  Link from "next/link";
import Loading from "../Loading";
import "../front-office/styles/Home.css"

function WelcomePage() {
  const { currentUser } = useAuth();
  const [user, setUser] = useState(null);
  const [message, setmessage] = useState("");
  const { uid, emailVerified} = useAuth().currentUser;

  


 const getUser = async () => {
    try {
      const documentSnapshot = await database.collection("user").doc(uid).get();
      const userData = documentSnapshot.data();
   

      if (userData.permission === "admin" && userData.active === true) {
        window.location.href=`/auth/dashboard/admin/${uid}`;
        return;
      }

      setUser(userData);
    } catch (e) {
      setmessage(e.message);
    }
  };
  useEffect(() => {
    getUser();

     
  }, []);


  const resetLink = async (e) => {
    firebase.auth().currentUser.reload(); // reloads user fields, like emailVerified:
    if (!firebase.auth().currentUser.emailVerified) {
      //resend verification email
      await currentUser
        .sendEmailVerification()
        .then((a) => e.message)
        .catch((e) => e.message);
      setmessage("Activation Link sent");
    }
  };

  return !user ? (
    <div><Loading/></div>
  ) : (
    <div>

      <div className="welcome1">
        <div className="welcomeman">
          <div className="indv">
            <img src="/img/logo.png" alt="" />
          </div>
          Welcome <strong></strong> {currentUser.email}
          <div className="welcomegrand">
            <div className="welcomeparent">
              <div className="welcomechil">
                Your Account need To be Verified; <br />
                Please click on the link sent to your Email to verify your
                account
              </div>{" "}
              <br />
              <p>If you didnt perform this operation please Contact us </p>{" "}
              <span>
                <a href>="/contact">Support</a>
              </span>{" "}
            </div>
          </div>
          <div className="restbuton">
            <button onClick={resetLink}> Send verification Link</button> <br />
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
