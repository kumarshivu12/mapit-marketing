import React from "react";
<<<<<<< HEAD
import image1 from "../../assets/images/photo-blogs/1.png";
import image2 from "../../assets/images/photo-blogs/2.png";
import image3 from "../../assets/images/photo-blogs/3.png";
import image4 from "../../assets/images/photo-blogs/4.png";
import image5 from "../../assets/images/photo-blogs/5.png";
import image6 from "../../assets/images/photo-blogs/6.png";
=======
import image1 from "../../assets/images/Solution1.webp";
import image2 from "../../assets/images/Solution1.webp";
import image3 from "../../assets/images/Solution2.webp";
import image4 from "../../assets/images/Solution3.webp";
>>>>>>> eed56797913f314bb7114a6be0fa386771dfed4f
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import { PropTypes } from "prop-types";
const image = [
  image1,
  image2,
  image3,
  image4,
<<<<<<< HEAD
  image5,
  image6,
=======
  image1,
  image2,
  image4,
  image1,
  image3,
  image2,
  image4,
>>>>>>> eed56797913f314bb7114a6be0fa386771dfed4f
];

const Posts = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
<<<<<<< HEAD
    navigate(`/blogpage`, {
=======
    navigate("/blogpage", {
>>>>>>> eed56797913f314bb7114a6be0fa386771dfed4f
      replace: false,
      state: {
        category: props.category,
        title: props.title,
        content: props.content,
        id: props.id,
<<<<<<< HEAD
        imageSRC: image[props.id-1],
        timestamp: props.timestamp,
=======
>>>>>>> eed56797913f314bb7114a6be0fa386771dfed4f
      },
    });
  };
  return (
    <>
      <div className="container">
        <div className="blogPost">
<<<<<<< HEAD
          <div className="categtimeBlogPost">
          <div className="categoryBlogPost">{props.category}</div>
          <div className="timeStampBlogPost">{props.timestamp}</div></div>
=======
          <div className="categoryBlogPost">{props.category}</div>
>>>>>>> eed56797913f314bb7114a6be0fa386771dfed4f
          <div className="picBlogPost">
            <img
              loading="lazy"
              className="pictureBlogPost"
<<<<<<< HEAD
              src={image[props.id-1]}
=======
              src={image[props.id]}
>>>>>>> eed56797913f314bb7114a6be0fa386771dfed4f
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
