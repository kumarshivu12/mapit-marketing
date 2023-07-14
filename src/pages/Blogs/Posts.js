import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./Blogs.css";


//Import the additional image for blogpost and then add it to the array below too after importing , keep in mind to update it with sequential  next id 
import image1 from "../../assets/images/photo-blogs/1.png";
import image2 from "../../assets/images/photo-blogs/2.png";
import image3 from "../../assets/images/photo-blogs/3.png";
import image4 from "../../assets/images/photo-blogs/4.png";
import image5 from "../../assets/images/photo-blogs/5.png";
import image6 from "../../assets/images/photo-blogs/6.png";
const image = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

const Posts = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blogpage/${props.id}`, {
      replace: false,
      state: {
        category: props.category,
        title: props.title,
        content: props.content,
        id: props.id,
        imageSRC: image[props.id-1],
        timestamp: props.timestamp,
      },
    });
  };
  return (
    <>
      <div className="container">
        <div className="blogPost">
          <div className="categtimeBlogPost">
          <div className="categoryBlogPost">{props.category}</div>
          <div className="timeStampBlogPost">{props.timestamp}</div></div>
          <div className="picBlogPost">
            <img
              loading="lazy"
              className="pictureBlogPost"
              src={image[props.id-1]}
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

{
  /* < div className="container">
    <div className="blogPost">
    <div className="categoryBlogPost">
      {props.category}
      </div>
      <div className="picBlogPost">
        <img loading="lazy" className="pictureBlogPost" src={props.imageSRC}/>
      </div>
      <div className="titleBlogPost">
      {props.title} 
      </div>
      <div className="contentBlogPost">
      {props.content}
      <div className="readmoreBlogPost">
        <button className="btnreadmoreBP">Read More</button>
      </div>
      </div>
    </div>
    </div> */
}
