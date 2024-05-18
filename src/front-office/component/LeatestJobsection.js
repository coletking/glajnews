'use client'
import React, { useEffect, useState } from "react";
import { getPosts } from "../../Services/GetUser.service";
import "../styles/Home.css";
import TruncatedHTML from "../../back-office/module/TruncatedText";

function LeatestJobsection() {
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

  return (
    <div>
      <div className="headersection">Latest Gist</div>
      <div className="iconatiner">
        {imagepost.slice(0, 20).map((post, id) => {
          return (
            <>
              <div class="card-container">
                <div class="square">
                  <img src={post.imageUrl} class="mask" alt="PostICON" />
                  <div class="h1-titlr">{post.title}</div>
                  <TruncatedHTML htmlString={post.content} maxLength={50} />
                    <button>Read</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default LeatestJobsection;
