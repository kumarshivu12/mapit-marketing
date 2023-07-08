import React from "react";
import image1 from "../../assets/images/Solution1.jpg";
import image2 from "../../assets/images/Solution1.jpg";
import image3 from "../../assets/images/Solution2.jpg";
import image4 from "../../assets/images/Solution3.jpg";
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import "./Blogs.css"
import { PropTypes } from 'prop-types';
const image = [image1, image2, image3 , image4 , image1, image2, image4 , image1, image3, image2, image4 ]

const Posts = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/blogpage', { replace: false, state: { category:props.category, title:props.title, content:props.content, id:props.id}});
  };  
  return (
    <>
    < div className="container">
    <div className="blogPost">
    <div className="categoryBlogPost">
      {props.category}
      </div>
      <div className="picBlogPost">
        <img className="pictureBlogPost" src={image[props.id]}/>
      </div>
      <div className="titleBlogPost">
      {props.title} 
      </div>
      <div className="contentBlogPost">
      {props.content.slice(0,250)}...
      <div className="readmoreBlogPost">
        <button className="btnreadmoreBP" onClick={handleClick}> Read More </button>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

Posts.propTypes= {
    category:PropTypes.string.isRequired,
    imageSRC: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

Posts.defaultProps= {
    category:"Loading...",
    imageSRC: image4,
    title: "This Blogpost is removed",
    content: "This Blogpost is removed"
}
export default Posts;


{/* < div className="container">
    <div className="blogPost">
    <div className="categoryBlogPost">
      {props.category}
      </div>
      <div className="picBlogPost">
        <img className="pictureBlogPost" src={props.imageSRC}/>
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
    </div> */}