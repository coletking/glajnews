"use client";
import { getVideoPost } from "../../Services/GetUser.service";
import React, { useEffect, useRef, useState } from "react";
import "../../front-office/styles/Home.css";
import GoogleAds from "../../front-office/component/GoogoleAdd";
import { getTimeAgo } from "../../Services/Utility";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
const VideoGallery = () => {
  const [videos, setvideo] = useState([]);
  const [politics, setpolitics] = useState([]);
  const [business, setbusiness] = useState([]);
  const [enterainment, setentertainment] = useState([]);

  const [sport, setsport] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.oncontextmenu = () => false;
      const playButton = document.createElement("button");
      playButton.textContent = "Play";
      playButton.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          playButton.textContent = "Pause";
        } else {
          video.pause();
          playButton.textContent = "Play";
        }
      });
      video.parentNode.insertBefore(playButton, video);
    }
  }, []);
  useEffect(() => {
    getVideoPost("", (post) => {
      setvideo(post);
      const politics = post.filter((e) => e.category === "politics");
      setpolitics(politics);
      const business = post.filter((e) => e.category === "business");
      setbusiness(business);
      const sport = post.filter((e) => e.category === "sport");

      setsport(sport);
      const entertainmane = post.filter((e) => e.category === "entertainment");

      setentertainment(entertainmane);
   

    });
  }, []);
  return (
    <>
    <Navbar/>
      <div className="adverstserct">
        <GoogleAds />
      </div>
      <div className="gallery">
        <div className="headersecjdjdgallry">Trending News</div>
         <div className="flexallvideo">
         {videos.splice(0,12).map((video, index) => {
          return (
            <>
              <div key={index} className="video-container">
                <div className="recentpost">
                  <div className="postall">
                    {video && video.title}
                  </div>
                  <div className="allknowauth">
                    <div className="dateandtuoe text-warning ">
                      {getTimeAgo(video.createdAt)} <br />
                      {video.PublishBy ? video.PublishBy : ""}
                    </div>
                    <div className="authboandd">
                      <span>{video.category}</span>
                    </div>
                  </div>
                </div>
                <video ref={videoRef} controls={false} controlsList="nodownload" height="500px">
                  <source src={video.imageUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <a href={`/posts/${video.id}`}> watch Clip</a>
              </div>
            </>
          );
        })}
         </div>
      </div>

      <div className="gallery">
        <div className="headersecjdjdgallry">Politics</div>
         <div className="flexallvideo">
         {politics.slice(0,12).map((video, index) => {
          return (
            <>
              <div key={index} className="video-container">
                <div className="recentpost">
                  <div className="postall">
                    {video && video.title}
                  </div>
                  <div className="allknowauth">
                    <div className="dateandtuoe text-warning ">
                      {getTimeAgo(video.createdAt)} <br />
                      {video.PublishBy ? video.PublishBy : ""}
                    </div>
                    <div className="authboandd">
                      <span>{video.category}</span>
                    </div>
                  </div>
                </div>
                <video ref={videoRef} controls={false} controlsList="nodownload" height="500px">
                  <source src={video.imageUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <a href={`/posts/${video.id}`}> watch Clip</a>
              </div>
            </>
          );
        })}
         </div>
      </div>

      <div className="adverstserct">
        <GoogleAds />
      </div>

      <div className="gallery">
        <div className="headersecjdjdgallry">Sport</div>
         <div className="flexallvideo">
         {sport.slice(0,12).map((video, index) => {
          return (
            <>
              <div key={index} className="video-container">
                <div className="recentpost">
                  <div className="postall">
                    {video && video.title}
                  </div>
                  <div className="allknowauth">
                    <div className="dateandtuoe text-warning ">
                      {getTimeAgo(video.createdAt)} <br />
                      {video.PublishBy ? video.PublishBy : ""}
                    </div>
                    <div className="authboandd">
                      <span>{video.category}</span>
                    </div>
                  </div>
                </div>
                <video ref={videoRef} controls={false} controlsList="nodownload" height="500px">
                  <source src={video.imageUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <a href={`/posts/${video.id}`}> watch Clip</a>
              </div>
            </>
          );
        })}
         </div>
      </div>
      <div className="adverstserct">
        <GoogleAds />
      </div>
      <div className="gallery">
        <div className="headersecjdjdgallry">Sport</div>
         <div className="flexallvideo">
         {enterainment.slice(0,12).map((video, index) => {
          return (
            <>
              <div key={index} className="video-container">
                <div className="recentpost">
                  <div className="postall">
                    {video && video.title}
                  </div>
                  <div className="allknowauth">
                    <div className="dateandtuoe text-warning ">
                      {getTimeAgo(video.createdAt)} <br />
                      {video.PublishBy ? video.PublishBy : ""}
                    </div>
                    <div className="authboandd">
                      <span>{video.category}</span>
                    </div>
                  </div>
                </div>
                <video ref={videoRef} controls={false} controlsList="nodownload" height="500px">
                  <source src={video.imageUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <a href={`/posts/${video.id}`}> watch Clip</a>
              </div>
            </>
          );
        })}
         </div>
      </div>
      <div className="adverstserct">
        <GoogleAds />
      </div>
      <div className="gallery">
        <div className="headersecjdjdgallry">Sport</div>
         <div className="flexallvideo">
         {business.slice(0,12).map((video, index) => {
          return (
            <>
              <div key={index} className="video-container">
                <div className="recentpost">
                  <div className="postall">
                    {video && video.title}
                  </div>
                  <div className="allknowauth">
                    <div className="dateandtuoe text-warning ">
                      {getTimeAgo(video.createdAt)} <br />
                      {video.PublishBy ? video.PublishBy : ""}
                    </div>
                    <div className="authboandd">
                      <span>{video.category}</span>
                    </div>
                  </div>
                </div>
                <video ref={videoRef} controls={false} controlsList="nodownload" height="500px">
                  <source src={video.imageUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <a href={`/posts/${video.id}`}> watch Clip</a>
              </div>
            </>
          );
        })}
         </div>
      </div>
      <Footer/>
    </>
  );
};

export default VideoGallery;
