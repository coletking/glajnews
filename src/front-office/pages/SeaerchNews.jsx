import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPosts } from "../../Services/GetUser.service";
import "../styles/contact.css";
import Navbar from "../component/TopBar";
import UserNavbar from "../component/Navbar";
import { getTimeAgo } from "../../Services/Utility";
function SeaerchNews() {
  const newsItes = useParams().items;
  const [newPost, setNewsPost] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getPosts("", (result) => {
      const filteredPosts = Object.values(result).filter((post) =>
        post.title.toLowerCase().includes(newsItes.toLowerCase())
      );
      setNewsPost(filteredPosts);
    });
  }, []);

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <UserNavbar />
      {newPost.length === 0 ? (
        <>
          <div className="no-news-container">
            <h2>Your seached for : {newsItes}</h2>
            <p>Click the button below to view more news.</p>
            <button onClick={handleHome}>View More News</button>
          </div>
        </>
      ) : (
        <>
         <div className="jsjbssas">
         <h2>Your seached for :  {newsItes}</h2></div>
          <div className="news-container">
            {newPost.map((post, index) => (
              <div key={index} className="news-card">
                <img src={post.imageUrl} alt="News" className="news-image" />
                <div className="news-details">
                  <h3 className="news-title">{post.title}</h3>
                  <p className="publisher">{post.PublishBy}</p>
                  <p className="publication-date">
                    {post.createdAt ? getTimeAgo(post.createdAt) : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SeaerchNews;
