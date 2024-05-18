import React from "react";
import "../styles/Footer.css";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";
function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container row">
          <div class="footer-col">
            <h4>News</h4>
            <ul>
              <li>
                <a href="/category/politics">Politics</a>
              </li>
              <li>
                <a href="/category/business">business</a>
              </li>
              <li>
                <a href="/category/sport">Sport</a>
              </li>
              <li>
                <a href="/category/entertainment">Entertainment</a>
              </li>
              <li>
                <a href="/category/eye-witness">Eye-witness</a>
              </li>
              <li>
                <a href="/category/foreign">Foreign</a>
              </li>

              <li>
                <a href="/category/education">Education</a>
              </li>
              <li>
                <a href="/category/extra">Extra</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              {/* <li>
                <a href="/contact">FAQ</a>
              </li> */}
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/contact">Support</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Opinion</h4>
            <ul>
              <li>
                <a href="/category/eye-witness">Eye-witness</a>
              </li>
              <li>
                <a href="/category/article">Article</a>
              </li>
              <li>
                <a href="/category/documentary">Documentary</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="https://www.facebook.com/profile.php?id=100081678427449" style={{ fontSize: "20px" }}>
                <TiSocialFacebook />
              </a>
              <a href="https://twitter.com/GlajNews15279?t=Jy5JRJcK2QQP4O2jfS_8yw&s=09">
                <img src="/image/x.svg" alt="" height="30px" />
              </a>
              <a href="https://www.instagram.com/invites/contact/?i=n3px60k8t1go&utm_content=tkbelb3" style={{ fontSize: "20px" }}>
                <TiSocialInstagram />
              </a>
              <a href="https://www.linkedin.com/in/glaj-news-06b9462a9" style={{ fontSize: "20px" }}>
                <TiSocialLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="allrawakndd"></div>
    </div>
  );
}

export default Footer;
