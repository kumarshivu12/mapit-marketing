import React, { useState, useEffect } from "react";
import "./Blogs.css";
import articlesData from './blogsdata.json';
import Posts from "./Posts";

function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(3);

  const totalSlides = Math.ceil(articlesData.articles.length / slidesPerPage);
  const totalDots = Array.from(Array(totalSlides).keys());

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = document.querySelector('.carousel-container').offsetWidth;
      const slideWidth = document.querySelector('.carousel-slide').offsetWidth;
      // setSlidesPerPage(Math.floor(containerWidth / slideWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickDot = (index) => {
    setCurrentPage(index);
  };

  const renderSlides = () => {
    const start = currentPage * slidesPerPage;
    const end = start + slidesPerPage;
    const visibleArticles = articlesData.articles.slice(start, end);
  
    return visibleArticles.map((article) => (
      <div className="carousel-slide" key={article.id} style={{ display: "-webkit-inline-box" }}>
        <Posts key={article.id}
          id={article.id}
          category={article.category}
          imageSRC={article.imageSRC}
          title={article.title}
          content={article.content}
        />
      </div>
    ));
  };
  

  const renderDots = () => {
    return totalDots.map((index) => (
      <span
        key={index}
        className={`dot ${currentPage === index ? 'active' : ''}`}
        onClick={() => handleClickDot(index)}
      ></span>
    ));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {renderSlides()}

      </div>
      <div className="carousel-dots">
        {renderDots()}
      </div>
    </div>
  );
}

const Blogs = () => {
  return (

    <div className="Body">
    <div className="Header">Blogs</div>
    <div>
      <Carousel />
    </div>
    </div>
  );
};

export default Blogs;