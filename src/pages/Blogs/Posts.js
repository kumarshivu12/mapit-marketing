import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./Blogs.css";

//Import the additional image for blogpost and then add it to the array below too after importing , keep in mind to update it with sequential  next id
import image1 from "../../assets/images/photo-blogs/1.svg";
import image2 from "../../assets/images/photo-blogs/2.svg";
import image3 from "../../assets/images/photo-blogs/3.webp";
import image4 from "../../assets/images/photo-blogs/4.svg";
import image5 from "../../assets/images/photo-blogs/5.webp";
import image6 from "../../assets/images/photo-blogs/6.svg";
const image = [image1, image2, image3, image4, image5, image6];

const Posts = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blogpage/${props.id}`, {
      replace: false,
    });
  };
  return (
    <>
      <div className="container">
        <div className="blogPost">
          <div className="categtimeBlogPost">
            <div className="categoryBlogPost">{props.category}</div>
            <div className="timeStampBlogPost">{props.timestamp}</div>
          </div>
          <div className="picBlogPost">
            <img
              loading="lazy"
              className="pictureBlogPost"
              src={image[props.id - 1]}
            />
          </div>
          <div className="titleBlogPost">{props.title}</div>
          <div className="contentBlogPost">
            {props.content.slice(0, 250)}...
            <div className="readmoreBlogPost">
              <button className="btnreadmoreBP" onClick={handleClick}>
                {" "}
                Read More{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Posts.propTypes = {
  category: PropTypes.string.isRequired,
  imageSRC: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Posts.defaultProps = {
  category: "Loading...",
  imageSRC: image4,
  title: "This Blogpost is removed",
  content: "This Blogpost is removed",
};
export default Posts;
