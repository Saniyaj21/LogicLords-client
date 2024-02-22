import React, { useEffect } from "react";
import "./courseComponent.scss";
import ReactPlayer from "react-player";
import dp from "../image/dp.png";
import courseImg from "../image/courseImg.svg";
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Rate } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function CourseComponent({
  thumbnail,
  courseType,
  courseDescription,
  instractorDp,
  instractorName,
  instractorRole,
  ratting ,
  totalRattingAmmount ,
  isHistory = false,
  isFree=true,
  progress
}) {
  useEffect(() => {}, []);

  return (
    <div className="course-cart">
      <div className="video-container">
        <img src={courseImg} alt="" />
      </div>

      <div className="course-info">
        <span className="course-type">{courseType}</span>
        <p className="course-description nunito-6">
         {courseDescription}
        </p>
      </div>

      {isHistory ? <div className="progress-container" >
        <div className="progress" style={{width: progress}}></div>
      </div> : ""}

      <div className="instractor-info">
        <div className="dp-container">
          <img src={dp} alt="" />
        </div>
        <div className="other-info">
          <p className="name">{instractorName}</p>
          <p className="role">{instractorRole}</p>
        </div>
      </div>

      {isHistory ? (
        ""
      ) : (
        <div className="course-other-info" id="course-other-info">
          <p>{isFree? "Free":"Paid"}</p>

          {
            ratting? (<div className="ratting">
            <div>
              <p className="nunito-6">{ratting}</p>
              <p className="star-container">
                <Rate count={5} value={ratting} allowHalf disabled />
              </p>
            </div>
            <div>
              <p className="nunito-6 ammount-of-student">({totalRattingAmmount})</p>
            </div>
          </div>):("")
          }
          
        </div>
      )}

      <div className="enroal-container">
        <Link
        // to={"/playlist/id"}
        >
          <button className="btn">
            {isHistory ? "Continue" : "Enrole Now"} <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseComponent;
