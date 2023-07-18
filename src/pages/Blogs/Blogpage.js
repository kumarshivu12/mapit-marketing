import whatsapp from "../../assets/images/photo-blogs/whatsapp.svg";
import facebook from "../../assets/images/photo-blogs/facebook.svg";
import instagram from "../../assets/images/photo-blogs/instagram.svg";
import twitter from "../../assets/images/photo-blogs/twitter.svg";
import linkedin from "../../assets/images/photo-blogs/linkedin.svg";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import articlesData from "./blogsdata.json";
import Footer from "../../components/Footer/Footer";
import Posts from "./Posts";

//Import the additional image for blogpost and then add it to the array below too after importing , keep in mind to update it with sequential  next id
import image1 from "../../assets/images/photo-blogs/1.webp";
import image2 from "../../assets/images/photo-blogs/2.webp";
import image3 from "../../assets/images/photo-blogs/3.webp";
import image4 from "../../assets/images/photo-blogs/4.webp";
import image5 from "../../assets/images/photo-blogs/5.webp";
import image6 from "../../assets/images/photo-blogs/6.webp";
const image = [image1, image2, image3, image4, image5, image6];

const Blogpage = () => {
  const { id1 } = useParams();
  const id = id1 - 1;
  const nextid = id + 2;
  const location = useLocation();
  const { content, title, category, timestamp } = articlesData["articles"][id];
  const imageSRC = image[id];
  const navigate = useNavigate();
  const contentURL = `Hey there! I wanted to share this amazing blog post with you. It's titled ${title} and it's really insightful. You can check it out here:
  ${window.location.href}
I hope you find it interesting and valuable! Enjoy reading!`;

  const whatsURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    contentURL
  )}`;
  const instaURL = `https://www.instagram.com/share?url=${encodeURIComponent(
    window.location.href
  )}&title=${encodeURIComponent(contentURL)}`;
  const linkedinURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    window.location.href
  )}&title=${encodeURIComponent(contentURL)}`;
  const twitURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    contentURL
  )}`;
  const faceURL = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
    window.location.href
  )}&quote=${encodeURIComponent(contentURL)}`;

  const previousPostClick = () => {
    navigate(`/blogpage/${id}`, {
      replace: false,
    });
  };
  const nextPostClick = () => {
    navigate(`/blogpage/${nextid}`, {
      replace: false,
    });
  };

  return (
    <>
      <script src="https://platform.linkedin.com/in.js" type="text/javascript">
        lang: en_US
      </script>
      <div className="containerBlogPage">
        <div
          className="topBlueBlock"
          style={{
            backgroundImage: `url(${imageSRC})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="subheadingBlock">
          <div className="categoryBlock">{category}</div>
          <div className="timestampBlock">{timestamp}</div>
        </div>
        <div className="titleBlock">{title}</div>
        <div className="pageBlock">
          <div className="contentBlock">{content}</div>
          <div className="footerLine"></div>
          <div className="share">
            <div className="ShareIconsText">Share</div>
            <div className="ShareIcons">
              <a target="_blank" href={whatsURL}>
                <img src={whatsapp}></img>
              </a>
            </div>
            <div className="ShareIcons" id="others">
              <a target="_blank" href={faceURL}>
                <img src={facebook}></img>
              </a>
            </div>
            <div className="ShareIcons" id="others">
              <a target="_blank" href={instaURL}>
                <img src={instagram}></img>
              </a>
            </div>
            <div className="ShareIcons" id="others">
              <a target="_blank" href={twitURL}>
                <img src={twitter}></img>
              </a>
            </div>
            <div className="ShareIcons" id="others">
              <a target="_blank" href={linkedinURL}>
                <img src={linkedin}></img>
              </a>
            </div>
          </div>
          <div className="footerLine" id="second"></div>
          <div className="postChanger">
            <div class="post-button-container">
              <button
                disabled={id1 == 1}
                onClick={previousPostClick}
                class="post-button"
              >
                <span class="post-button-icon">←</span>
                Previous Post
              </button>
              <button
                disabled={id1 == articlesData["articles"].length}
                onClick={nextPostClick}
                class="post-button"
              >
                Next Post
                <span class="post-button-icon">→</span>
              </button>
            </div>
          </div>
        </div>
        <div className="footerBlogpage">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blogpage;
