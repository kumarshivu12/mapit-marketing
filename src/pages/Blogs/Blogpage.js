import { useLocation } from 'react-router-dom';
import Posts from './Posts';
const Blogpage = () => {
    const location = useLocation();
    const { content, title , category } = location.state;
    console.log({content});
  return (
      <>
      <div className='containerBlogPage'>
      <div className='topBlueBlock'></div>
        <div className='categoryBlock'>{category}</div>
        <div className='titleBlock'>{title}</div>
        <div className='pageBlock'>
         <div className='contentBlock'>{content}</div> 
        </div>
        <div className='footerBlock'></div>
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
