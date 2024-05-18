'use client'
import React, { useEffect, useState } from "react";
import { getPosts } from "../../Services/GetUser.service";
import "../styles/Home.css";
import VideoCard from "../../back-office/module/Video.js";

function ShowVideo() {
  const [imagepost, setImagepost] = useState([]);
  const [videopost, setVideoepost] = useState([]);
  useEffect(() => {
    getPosts("", (post) => {
      const imgPost = post.filter((e) => e.fileType === "image");
      const vPost = post.filter((e) => e.fileType === "video");
      setImagepost(imgPost);
      setVideoepost(vPost);
    });
  }, []);

  const videoContainerStyle = {
    width: "100%", // Make the video container fill the available width
    maxWidth: "600px", // Limit the maximum width of the video container
    margin: "auto", // Center the video container horizontally
    marginBottom: "20px", // Add margin for spacing between videos
  };

  const videoStyle = {
    width: "100%", // Make the video fill the container width
    height: "auto", // Maintain the aspect ratio while adjusting width
    borderRadius: "8px", // Add border-radius for a rounded appearance
    display: "block", // Adjust display property to handle inline-block spacing
  };

  return (
    <div>
      <div className="videocontejt">
        <div className="allsecrion">Video Clip</div>
        {videopost.slice(0, 3).map((post, id) => {
          return (
            <>
              <VideoCard key={id} videoUrl={post.imageUrl} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ShowVideo;
