import React, { useEffect, useState } from "react";
import { getPostsbyCateories } from "../../Services/GetUser.service";
import "../Styles/ViewPost.css";
import "../../front-office/styles/Home.css";
import { Link } from "react-router-dom";
import TruncatedHTML from "./TruncatedText";
import { getTimeAgo } from "../../Services/Utility";

function PostModule({ category, type, lenght }) {
  const [imagepost, setImagepost] = useState([]);

  const getpost = async () => {

  };

  useEffect(() => {
    getpost("", (post) => {
      const viewpost = post.filter((e) => e.Blogtype === type);
      setImagepost(post);
    });
  }, []);

  return (
    <div>
      <div className="postjeader">
        <div className="Postmaks">
          <div className="postnewba">
            {imagepost.slice(0, lenght).map((post, id) => {
              console.log(post)
              return (
                <>
                  <div className="" key={id}>
                    <div className="dateandtuoe">
                      {getTimeAgo(post.createdAt)}
                    </div>
                    <div className="heading">
                      <h1>{post.title}</h1>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModule;
