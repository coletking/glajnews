"use client";
import React from "react";
import { useState } from "react";
import "../../front-office/styles/Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";
import "../styles/Footer.css";
import {useNavigate, useParams } from "react-router-dom";
import TopBar from "./TopBar";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate()
  const date = new Date();

  const category =  useParams().category


  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${day}, ${month} ${dayOfMonth}, ${year}`;
  const routetoVideo = () => {
    navigate("/videos");
  };


  return (
    <div>
      <>
       <TopBar/>
        <nav className="navbar">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/image/logo.png" alt="logo" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className={category === undefined ? "nav-links-active" : "nav-links"}  onClick={closeMobileMenu}>
                Home
              </a>
            </li>

            <li className="nav-item " >
              <a href="/category/politics"
                className={category === "politics" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                Politics
              </a>
            </li>

            <li className="nav-item">
              <a href="/category/entertainment"
                className={category === "entertainment" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                Entertainment
              </a>
            </li>

            <li className="nav-item">
              <a href="/category/business"
                className={category === "business" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a href="/category/sport"
               className={category === "sport" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                sport
              </a>
            </li>
            <li className="nav-item">
              <a href="/category/foreign"
               className={category === "foreign" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                foreign
              </a>
            </li>

            <li className="nav-item">
              <a href="/category/eye-witness"
               className={category === "eye-witness" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                Eye witness
              </a>
            </li>

            <li className="nav-item">
              <a href="/category/education"
               className={category === "education" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                Education
              </a>
            </li>

            <li className="nav-item">
              <a href ="/category/extra"
               className={category === "extra" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                Extra
              </a>
            </li>

            <li className="nav-item">
              <a href ="/category/article"
               className={category === "article" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                Article
              </a>
            </li>

            <li className="nav-item">
              <a href ="/category/documentary"
               className={category === "documentary" ? "nav-links-active" : "nav-links"} 
                onClick={closeMobileMenu}
              >
                Documentary 
              </a>
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
}
