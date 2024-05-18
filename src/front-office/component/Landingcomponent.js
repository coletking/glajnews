"use client";
import React, { useEffect, useState } from "react";
import GoogleAds from "./GoogoleAdd";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import TruncatedHTML from "../../back-office/module/TruncatedText";
import { getTimeAgo } from "../../Services/Utility";
import { getPosts } from "../../Services/GetUser.service";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import AdSense from "./GoogoleAdd";
function Landingcomponent() {
  const [imagepost, setImagepost] = useState([]);
  const [recentpost, setRecentPost] = useState([]);
  const [video, setvideo] = useState([]);
  const [politics, setpolitics] = useState([]);
  const [business, setbusiness] = useState([]);
  const [enterainment, setentertainment] = useState([]);
  const [froein, setforeign] = useState([]);
  const [eyewinths, seteyewithness] = useState([]);
  const [sport, setsport] = useState([]);
  const [education, seteducation] =  useState([]);
  const [extra, setextra] = useState([]);
  const [articl, setarticle] =  useState([])
  const [documentry, setdocumentty]= useState([])
  const [normal,setNormalNews] =  useState([])
  // Get all posts for the landing page

 useEffect(()=>{
   getPosts("", (post) => {
    const recentTrendingPost = post.filter(
      (e) => e.Blogtype === "Trending" && e.fileType !== "video"
    );

    const recentLatestPost = post.filter(
      (e) => e.Blogtype === "Normal " && e.fileType !== "video"
    );
    setNormalNews(recentLatestPost)
    const recentPost = recentTrendingPost[0];
    const video = post.filter((e) => e.fileType === "video");
    setRecentPost(recentPost);
    setImagepost(post);
    setvideo(video);
    const politics = post.filter((e) => e.category === "politics");
    setpolitics(politics);
    const business = post.filter((e) => e.category === "business");

    setbusiness(business);
    const sport = post.filter((e) => e.category === "sport");

    setsport(sport);
    const entertainmane = post.filter((e) => e.category === "entertainment");

    setentertainment(entertainmane);
    const eyewinths = post.filter((e) => e.category === "eye-witness");

    seteyewithness(eyewinths);
    const foreign = post.filter((e) => e.category === "foreign");

    setforeign(foreign);
    const education = post.filter((e) => e.category === "education");

    seteducation(education);

    const extra = post.filter((e) => e.category === "extra");

    setextra(extra);
    
    const article = post.filter((e) => e.category === "article");

    setarticle(article);
    const documentry = post.filter((e) => e.category === "documentary");

    setdocumentty(documentry);
  });
 },[])

  return (
    <div>
      <div className="adverstserct">
      <AdSense adClient="ca-pub-7832400333464323" adSlot="6701540410" />
      </div>

      <div className="postheadinsection">
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
                  {normal.slice(0, 7).map((post, id) => {
                    return (
                      <>
                        <div className="aldjdbdlink" key={id}>
                        <a href={`/posts/${post.id}`}>
                          <div className="wrappera-f">
                          
                              <div className="heading">
                                <p>
                                  {post.fileType === "video" ? "Video : " : ""}{" "}
                                  {post.title}
                                </p>
                              </div>
                          

                            <div className="dateandtuoe text-warning ">
                              {getTimeAgo(post.createdAt)}
                            </div>
                          </div>
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="recentpost">
            <div className="postall">{recentpost && recentpost.title}</div>
            <div className="allknowauth">
              <div className="dateandtuoe text-warning ">
                {getTimeAgo(recentpost.createdAt)} <br />
                
              </div>
              <div className="authboandd">
                <span>{recentpost.category}</span>
              
              </div>
            </div>
            <div className="imaescti">
              <img src={recentpost && recentpost.imageUrl} alt="" />
            </div>
            
            <div className="catiopms">
            {recentpost.PublishBy ?  <div className="bupName">Publish by : {recentpost.PublishBy}</div>  : ""}
              <TruncatedHTML
                htmlString={recentpost && recentpost.content}
                maxLength={850}
              />
            </div>
            <Link to={`/posts/${recentpost.id}`}>Read More ...</Link>
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
                  {imagepost.slice(0, 6).map((post, id) => {
                    return (
                      <>
                        <div className="" key={id}>
                          <div className="wrappera-f">
                          <a href={`/posts/${post.id}`}>
                            <div className="headingtesn">
                              <div className="titiolsecalls">
                                <p>
                                  {post.fileType === "video" ? "Video : " : ""}{" "}
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
      </div>

      <div className="adverstserct2">
      <AdSense adClient="ca-pub-7832400333464323" adSlot="5196887055" />
      </div>

      <div className="">
        <div className="">
          <div className="postheadinsection">
            <div className="postheaderholder1">
              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Videos
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {video.slice(0, 12).map((post, id) => {
                        return (
                          <>
                            <div className="" key={id}>
                              <div className="wrappera-f">
                              <a href={`/posts/${post.id}`}>
                                <div className="headingtesn">
                                  <div className="titiolsec">
                                    <p>
                                      {post.fileType === "video"
                                        ? "Video : "
                                        : ""}{" "}
                                      {post.title}
                                    </p>
                                    <p>
                                      <TruncatedHTML
                                        htmlString={post.content}
                                        maxLength={300}
                                      />
                                    </p>
                                    <div className="dateandtuoe text-warning">
                                      {post.createdAt ? getTimeAgo(post.createdAt):""}
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
          </div>
        </div>
      </div>

      <div className="postcategorysectiom">
        <div className="postconetrht">
          <div className="psodydjdbd">
            <div className="postheaderholder2">
              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Politics
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {politics.slice(0, 12).map((post, id) => {
                        return (
                          <>
                            <div className="" key={id}>
                              <div className="wrappera-f">
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
                    <a href="/category/politics">
                      <button>More ...</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Sport
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {sport.slice(0, 12).map((post, id) => {
                        return (
                          <>
                          <div className="" key={id}>
                            <div className="wrappera-f">
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
                    <a href="/category/sport">
                      <button>More ...</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Education
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {education.slice(0, 12).map((post, id) => {
                        return (
                          <>
                          <div className="" key={id}>
                            <div className="wrappera-f">
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
                    <a href="/category/education">
                      <button>More ...</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Entertainment
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {enterainment.slice(0, 12).map((post, id) => {
                        return (
                          <>
                            <div className="" key={id}>
                              <div className="wrappera-f">
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
                    <a href="/category/entertainment">
                      <button>More ...</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Business
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {business.slice(0, 12).map((post, id) => {
                        return (
                          <>
                          <div className="" key={id}>
                            <div className="wrappera-f">
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
                    <a href="/category/business">
                      <button>More ...</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Foriegn
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {froein.slice(0, 12).map((post, id) => {
                        return (
                          <>
                          <div className="" key={id}>
                            <div className="wrappera-f">
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
                    <a href="/category/foreign">
                      <button>More ...</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Eye-withness
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {eyewinths.slice(0, 12).map((post, id) => {
                        return (
                          <>
                            <div className="" key={id}>
                              <div className="wrappera-f">
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
                    <a href="/category/eye-witness">
                      <button>More ...</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="trendingnrewsc">
                <div className="headinisectim">
                  <h1>
                    {" "}
                    <VscDebugBreakpointData /> Extra
                  </h1>
                  <hr />
                  <div className="postsecall">
                    <div className="postnewba">
                      {extra.slice(0, 12).map((post, id) => {
                        return (
                          <>
                          <div className="" key={id}>
                            <div className="wrappera-f">
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
                    <a href="/category/extra">
                      <button>More ...</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="trendingnrewsc">
                    <div className="headinisectim">
                      <h1>
                        {" "}
                        <VscDebugBreakpointData /> Article
                      </h1>
                      <hr />
                      <div className="postsecall">
                        <div className="postnewba">
                          {articl.slice(0, 12).map((post, id) => {
                            return (
                              <>
                              <div className="" key={id}>
                                <div className="wrappera-f">
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
                        <a href="/category/extra">
                          <button>More ...</button>
                        </a>
                      </div>
                    </div>
                  </div>



                  <div className="trendingnrewsc">
                    <div className="headinisectim">
                      <h1>
                        {" "}
                        <VscDebugBreakpointData /> Documentary
                      </h1>
                      <hr />
                      <div className="postsecall">
                        <div className="postnewba">
                          {documentry.slice(0, 12).map((post, id) => {
                            return (
                              <>
                              <div className="" key={id}>
                                <div className="wrappera-f">
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
                        <a href="/category/extra">
                          <button>More ...</button>
                        </a>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="adverstserct">
      <AdSense adClient="ca-pub-7832400333464323" adSlot="2967892118" />
      </div>
    </div>
  );
}

export default Landingcomponent;
