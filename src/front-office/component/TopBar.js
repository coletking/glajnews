"use client";
import React, { useState } from "react";
import "../../front-office/styles/Navbar.css";

import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";
import "../styles/Footer.css";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    navigate(`/news/${searchText}`)
  };

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const date = new Date();
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
      <div className="topmaendue">
        <div className="contactis">
          <div className="social-links allalllinkflxe">
            <a href="https://www.facebook.com/profile.php?id=100081678427449" style={{ fontSize: "20px" }}>
              <TiSocialFacebook />
            </a>
            <a href="https://twitter.com/GlajNews15279?t=Jy5JRJcK2QQP4O2jfS_8yw&s=09">
              <img src="/image/x.svg" alt="" height="14px" />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=n3px60k8t1go&utm_content=tkbelb3" style={{ fontSize: "20px" }}>
              <TiSocialInstagram />
            </a>
            <a href="https://www.linkedin.com/in/glaj-news-06b9462a9" style={{ fontSize: "20px" }}>
              <TiSocialLinkedin />
            </a>
          </div>
          <div className="iconsectuon tobehide">|</div>
          <div className="iconsectuon tobehide">{formattedDate}</div>
        </div>
        <div className="alsk">
          <input type="text" placeholder="New Search" value={searchText} onChange={handleChange} maxLength={30} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="aldjdd">
          <button onClick={routetoVideo}>Video Clip</button>
        </div>
      </div>
    </div>
  )
}
