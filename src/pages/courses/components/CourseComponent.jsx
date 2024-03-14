import React, { useEffect } from "react";
import "./courseComponent.scss";
import ReactPlayer from "react-player";
import dp from "../image/dp.png";
import videoThumbnail from '../image/video.svg'
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Rate } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function CourseComponent({item , index}) {

  console.log(item , index);
  return (
    <div key={index} className="course-cart">
      <div className="video-container">
        <img src={videoThumbnail} alt="" />
      </div>

      <div className="course-info">
        <span className="course-type">{item.courseTag}</span>
        <p className="course-description nunito-6">
         {item.courseTitle}
        </p>
      </div>

      {/* prograss bar section */}

      {/* {isHistory ? <div className="cource-progress-container" >
        <div className="progress" style={{width: progress}}></div>
      </div> : ""} */}

      
      {/* instractor information section for future implemantation */}

       {/* 
      <div className="instractor-info">
        <div className="dp-container">
          <img src={dp} alt="" />
        </div>
        <div className="other-info">
          <p className="name">{instractorName}</p>
          <p className="role">{instractorRole}</p>
        </div>
      </div> */}


      {/* retting section for future implemantation */}

      {/* {isHistory ? (
        ""
      ) : (
        <div className="course-other-info" id="course-other-info">
          <p>{isFree? "Free":"Paid"}</p>

          
           <div className="ratting">
            <div>
              <p className="nunito-6">{ratting}</p>
              <p className="star-container">
                <Rate count={5} value={ratting} allowHalf disabled />
              </p>
            </div>
            <div>
              <p className="nunito-6 ammount-of-student">({totalRattingAmmount})</p>
            </div>
          </div>
          
          
        </div>
      )} */}

<p className="nunito-6 ammount-of-student">({item.totalEnrollment})</p>


      <div className="enroal-container">
        <Link
        // to={"/playlist/id"}
        >
          <button className="btn">
            Enrole Now <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseComponent;
