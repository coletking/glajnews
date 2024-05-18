// Carousel.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getPosts } from "../../Services/GetUser.service";

const VideoCarousel = () => {
  const [videos, setImagepost] = useState([]);
  useEffect(() => {
    getPosts("", (post) => {
      const recentTrendingPost = post.filter(
        (e) => e.fileType === "video"
      );
      setImagepost(recentTrendingPost);
    });
  }, []);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 508, // adjust the breakpoint as needed
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
          {
            breakpoint: 768, // adjust the breakpoint as needed
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1024, // adjust the breakpoint as needed
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1200, // adjust the breakpoint as needed
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ],
      };


  return (
 <>
 <div className="amdsd">
 <Slider {...settings}>
      {videos.map((videoLink, index) => (
        <div key={index} className="carousel-item">
          <video autoPlay={false} muted loop playsInline style={{ width: "275px", maxWidth: '100%'}}  className="carousel-video">
            <source src={videoLink.imageUrl} type="video/mp4" />
          </video>
        </div>
      ))}
    </Slider>
 </div>
 </>
  );
};

export default VideoCarousel;
