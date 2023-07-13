import { useLocation } from 'react-router-dom';
import whatsapp from "../../assets/images/photo-blogs/whatsapp.svg";
import facebook from "../../assets/images/photo-blogs/facebook.svg";
import instagram from "../../assets/images/photo-blogs/instagram.svg";
import twitter from "../../assets/images/photo-blogs/twitter.svg";
import linkedin from "../../assets/images/photo-blogs/linkedin.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import articlesData from "./blogsdata.json";

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
]

import Posts from './Posts';
import { LinkedIn } from '@mui/icons-material';
const Blogpage = () => {
  const location = useLocation();
    const { id, content, title , category, imageSRC, timestamp } = location.state;
  const currentData=articlesData["articles"][id];
  const prevData=articlesData["articles"][id-2];
  const nextData=articlesData["articles"][id];
  const navigate = useNavigate();
  const previousPostClick = () => {
    navigate("/blogpage/", {
      replace: false,
      state: {
        category: prevData.category,
        title: prevData.title,
        content: prevData.content,
        id: prevData.id,
        imageSRC: image[prevData.id-1],
        timestamp: prevData.timestamp,
      }
      ,
    });
  };
  const nextPostClick = () => {
    navigate("/blogpage/", {
      replace: false,
      state: {
        category: nextData.category,
        title: nextData.title,
        content: nextData.content,
        id: nextData.id,
        imageSRC: image[nextData.id-1],
        timestamp: nextData.timestamp,
      },
    });
  };
    
    
  return (
      <>
      <div className='containerBlogPage'>
      <div className='topBlueBlock' style={{backgroundImage: `url(${imageSRC})`}}>
      </div>
      <div className='subheadingBlock'>
        <div className='categoryBlock'>{category}</div>
        <div className='timestampBlock'>{timestamp}</div>
        </div>
        <div className='titleBlock'>{title}</div>
        <div className='pageBlock'>
         <div className='contentBlock'>{content}</div> 
          <div className='footerLine'></div>
          <div className='share'>
            <div className='ShareIconsText'>Share</div>
            <div className='ShareIcons' ><a href="whatsapp://send?text=http://www.example.com"><img src={whatsapp}></img></a></div>
            <div className='ShareIcons' id="others"><a href="whatsapp://send?text=http://www.example.com"><img src={facebook}></img></a></div>
            <div className='ShareIcons' id="others" ><a href="whatsapp://send?text=http://www.example.com"><img src={instagram}></img></a></div>
            <div className='ShareIcons' id="others" ><a href="whatsapp://send?text=http://www.example.com"><img src={twitter}></img></a></div>
            <div className='ShareIcons' id="others" ><a href="whatsapp://send?text=http://www.example.com"><img src={linkedin}></img></a></div>
          </div>
          <div className='postChanger'>
            <div className='previousPost'><button onClick={previousPostClick}>prev</button></div>
            <div className='nextPost'><button onClick={nextPostClick}>next</button></div>
          </div>

          <div className='footerLine' id="second"></div>
        </div>
      </div>
      </>









    // <div>
    //     <div className='container'>
    //   <div className='pageContent'>{content}</div>
    //   <div className='pageContent'>{title}</div>
    //   <div>{category}</div>
    //     </div>
    // </div>
  );
};

export default Blogpage;
