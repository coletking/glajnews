"use client";
import { getPosts, getPostsByID, getPostsbyCateories } from "../../Services/GetUser.service";
import Navbar from "../component/Navbar";
import React, { useEffect, useState } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import "../../front-office/styles/Home.css";
import TruncatedHTML from "../../back-office/module/TruncatedText";
import GoogleAds from "../../front-office/component/GoogoleAdd";
import { getTimeAgo } from "../../Services/Utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import Footer from "../component/Footer";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../../back-office/module/VideoPlayer.js";
import { Helmet } from "react-helmet";
import AdSense from "../../front-office/component/GoogoleAdd";

function PostByID() {
  const [post, setpost] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [imagepost, setImagepost] = useState([]);
  const [category, setcategorypost] = useState([]);
  const [recentpostnew, setRecentPost] = useState([]);
  const [normal,setNormalNews] =  useState([])
  const params = useParams().id;

  useEffect(() => {
    getPosts("", (posts) => {
      const allPost = posts;
      const recentTrendingPost = allPost.filter(
        (e) => e.Blogtype === "Trending" && e.fileType !== "video"
      );
      const recentLatestPost = posts.filter(
        (e) => e.Blogtype === "Normal " && e.fileType !== "video"
      );

      setNormalNews(recentLatestPost)
      setcategorypost(allPost);
      setImagepost(recentTrendingPost);

      setAllPost(allPost);
    });

    getPostsByID(params, (val) => {

      setpost(val[0]);
      const cat = val[0]
      const params = cat.category
      getPostsbyCateories(params, (catpost) => {
    
        const recentPost =
        catpost.length > 0 ? catpost : [];
        setRecentPost(recentPost);
      });
      // eslint-disable-next-line no-undef
      updateMetaTags(val[0]);
    });
  }, []);

  if (!post) {
    return <>Loading ...</>;
  }

  const handleShareClick = () => {
    window.open(`https://glajnews.com/posts/${post.id}`, "_blank"); // Open in new tab
  };
  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content} />
        <meta property="og:image" content={post.imageUrl} />
        <meta
          property="og:url"
          content={`https://glajnews.com/posts/${post.id}`}
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />
      <div>
        <div className="postheadinsection pt-12 ">
          <div className="postheaderholder">
            <div className="leatestnewssection">
              <div className="headinisectim">
                <h1>
                  {" "}
                  <VscDebugBreakpointData /> Latest News
                </h1>
                <hr />
                <div className="postsecall">
                  <div className="postnewba">
                    {normal.length > 0 &&
                      normal.slice(0, 7).map((post, id) => {
                        return (
                          <>
                            <div className="aldjdbdlink" key={id}>
                              <div className="wrappera-f">
                                <div className="dateandtuoe text-warning ">
                                  {getTimeAgo(post.createdAt)}
                                </div>
                                <a href={`/posts/${post.id}`}>
                                  <div className="heading">
                                    <p>
                                      {post.fileType === "video"
                                        ? "Video : "
                                        : ""}{" "}
                                      {post.title}
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="recentpost">
              <div className="postall">{post && post.title}</div>
              <div className="allknowauth">
                <div className="dateandtuoe text-warning ">
                  {getTimeAgo(post.createdAt)} <br />
                </div>
                <div className="authboandd">
                  <span>{post.category}</span>
                </div>
              </div>
              <div className="imaescti">
                {post.fileType === "video" ? (
                  <>
                    <div>
                      <div className="catiopms">
                        {post.PublishBy ? (
                          <div className="bupName">
                            Publish by : {post.PublishBy}
                          </div>
                        ) : (
                          ""
                        )}
                        <TruncatedHTML htmlString={post && post.content} />
                      </div>
                      <VideoPlayer videoUrl={post.imageUrl} />
                    </div>
                  </>
                ) : (
                  <div className="imaescti">
                    <img src={post && post.imageUrl} alt="" />
                    <div className="catiopms">
                      {post.PublishBy ? (
                        <div className="bupName">
                          Publish by : {post.PublishBy}
                        </div>
                      ) : (
                        ""
                      )}
                      <TruncatedHTML htmlString={post && post.content} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="trendingnrewsc">
              <div className="headinisectim">
                <h1>
                  {" "}
                  <VscDebugBreakpointData /> Trending News
                </h1>
                <hr />
                <div className="postsecall">
                  <div className="postnewba">
                    {allPost.slice(0, 6).map((post, id) => {
                      return (
                        <>
                          <div className="" key={id}>
                            <div className="wrappera-f">
                              <a href={`/posts/${post.id}`}>
                                <div className="headingtesn">
                                  <div className="titiolsecalls">
                                    <p>
                                      {post.fileType === "video"
                                        ? "Video : "
                                        : ""}{" "}
                                      {post.title}
                                    </p>
                                    <div className="dateandtuoe text-warning">
                                      {getTimeAgo(post.createdAt)}
                                    </div>
                                  </div>

                                  <div className="imagesectionthe">
                                    {post.fileType === "video" ? (
                                      <FontAwesomeIcon icon={faVideo} beat />
                                    ) : (
                                      <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="aimaside"
                                      />
                                    )}
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            
          </div>


          <div className="sharepostsection">
            <h1 className="fs-4 pr-3">Social Share : </h1>
            <div className="handleaksks">
              <FacebookShareButton
                url={`https://glajnews.com/posts/${post.id}`}
                title={post.title}
                hashtag={post.category}
                onClick={() =>
                  handleShareClick(
                    // Replace with actual Facebook share URL generation logic
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://glajnews.com/posts/${post.id}`
                    )}`
                  )
                }
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <PinterestShareButton
                url={`https://glajnews.com/posts/${post.id}`}
                onClick={() =>
                  handleShareClick(
                    // Replace with actual Pinterest share URL generation logic
                    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      `https://glajnews.com/posts/${post.id}`
                    )}&media=<span class="math-inline">\{encodeURIComponent\(post\.imageUrl\)\}&description\=</span>{encodeURIComponent(
                      post.title
                    )}`
                  )
                }
              >
                <PinterestIcon size={32} round />
              </PinterestShareButton>
              <RedditShareButton
                url={`https://glajnews.com/posts/${post.id}`}
                title={post.title}
              >
                <RedditIcon size={32} round />
              </RedditShareButton>

              <WhatsappShareButton
                url={`https://glajnews.com/posts/${post.id}`}
                title={post.title}
                onClick={() =>
                  handleShareClick(
                    `https://wa.me/?text=${encodeURIComponent(
                      `${post.title} - Check out this news on Glaj News: https://glajnews.com/posts/${post.id}`
                    )}`
                  )
                }
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <LinkedinShareButton
                url={`https://glajnews.com/posts/${post.id}`}
                title={post.title}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>

  
          <div className="postcategorysectiom">
            <div className="postconetrht">
              <div className="psodydjdbd">
               
                  <div className="trendingnrewsc">
                    <div className="headinisectim">
                      <h1>
                        {" "}
                        <VscDebugBreakpointData /> {post.category} News
                      </h1>
                      <hr />
                      <div className="postsecall0000">
                        <div className="newCategory">
                          {recentpostnew.slice(0, 100).map((post, id) => {
                            return (
                              <>
                              <div className="" key={id}>
                                <div className="wrappera-f-new">
                                <a href={`/posts/${post.id}`}>
                                  <div className="headingtesn">
                                    <div >
                                      <p style={{textTransform:"uppercase", fontWeight:"bolder", fontSize:20}}>
                                        {post.fileType === "video"
                                          ? "Video : "
                                          : ""}{" "}
                                        {post.title}
                                      </p>
                                      <p style={{color:"black"}}>
                                        <TruncatedHTML
                                          htmlString={post.content}
                                          maxLength={200}
                                        />
                                      </p>
                                      <div className="dateandtuoe text-warning">
                                        {getTimeAgo(post.createdAt)}
                                      </div>
                                    </div>
                                   
                                      <div className="imagesectionthe">
                                        {post.fileType === "video" ? (
                                          <FontAwesomeIcon icon={faVideo} beat />
                                        ) : (
                                          <img
                                            src={post.imageUrl}
                                            alt=""
                                            className="aimaside"
                                          />
                                        )}
                                      </div>
                                    
                                  </div>
                                  </a>
                                </div>
                              </div>
                            </>
                            );
                          })}
                        </div>
                        <a href="/">
                          Back Home
                        </a>
                      </div>

                      
                    </div>
                 
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="adverstserct">
          <AdSense adClient="ca-pub-7832400333464323" adSlot="8752988689" />
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default PostByID;
