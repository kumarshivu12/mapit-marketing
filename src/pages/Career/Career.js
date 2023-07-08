import React from "react";
import "./Career.css";
import image4 from "../../assets/images/Solution3.jpg";
import log1 from "../../assets/images/careerlog1.png";
import log2 from "../../assets/images/careerlog2.png";
import log3 from "../../assets/images/careerlog3.png";
import log4 from "../../assets/images/careerlog4.png";

const Career = () => {
  return (
    <>
      <div className="topBannerC">
        <div className="picBlock">
          <div className="dataHeader">
            <div className="picHeader">Work with us</div>
            <div className="contentHeader">
              {" "}
              Join our team in developing innovative, global{" "}
            </div>
            <div className="contentHeader" id="two">
              location technology solutions.
            </div>
          </div>
        </div>
      </div>
      <div className="middleBlock">
        <div className="containerCareer">
          <div className="contentCareer">
            <h2 className="titleCareer">Working at MapIT.ai</h2>
            <p className="textCareer">
              At MapIT, we welcome passionate professionals to join our team. We
              offer the chance to create solutions that simplify the lives of
              users and companies through highly accurate indoor location
              technology requiring minimal infrastructure. Enjoy benefits such
              as flexibility, training, growth opportunities, active
              participation, continuous feedback, and a strong sense of
              contribution. Our doors are always open for those seeking an
              exciting and fulfilling career with us.
            </p>
          </div>
          <div className="imageCareer"></div>
        </div>
      </div>
      <div className="endBlueClass">
        <div className="containerBlueCareer">
          <h2 className="headerTitleBlueCareer">Our Core Values</h2>
          <div className="imageBoxContainerBlueCareer">
            <div className="imageBoxBlueCareer">
              <img src={log1} alt="Diversity" />
              <p className="imageCaptionBlueCareer">Diversity</p>
            </div>
            <div className="imageBoxBlueCareer">
              <img src={log2} alt="Image 2" />
              <p className="imageCaptionBlueCareer">Innovation</p>
            </div>
            <div className="imageBoxBlueCareer">
              <img src={log3} alt="Image 3" />
              <p className="imageCaptionBlueCareer">Teamwork</p>
            </div>
            <div className="imageBoxBlueCareer">
              <img src={log4} alt="Image 4" />
              <p className="imageCaptionBlueCareer">Balance</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUsForm">
        <div className="careerform-container">
          <h2 className="careerform-title">Ready to join our team?</h2>
          <div className="careerform-row">
            <div className="careerform-input">
              <label htmlFor="input1">FIRST NAME*</label>
              <input type="text" id="input1" />
            </div>
            <div className="careerform-input">
              <label htmlFor="input2">LAST NAME*</label>
              <input type="text" id="input2" />
            </div>
          </div>
          <div className="careerform-row">
            <div className="careerform-input">
              <label htmlFor="input3">EMAIL*</label>
              <input type="text" id="input3" />
            </div>
            <div className="careerform-input">
              <label htmlFor="input4">PHONE NUMBER*</label>
              <input type="text" id="input4" />
            </div>
          </div>
          <div className="careerform-buttons">
  <div className="careerform-file">
    <label htmlFor="file">RESUME/CV*</label>
    <input type="file" id="file" />
  </div>
  <div className="careerform-submit">
    <input type="submit" value="SUBMIT" />
  </div>
</div>

        </div>
      </div>
    </>
  );
};

export default Career;
