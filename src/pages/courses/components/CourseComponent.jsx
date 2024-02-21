import React from "react";
import "./courseComponent.scss";
import ReactPlayer from "react-player";
import dp from "../image/dp.png";
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

function CourseComponent() {
  return (
    <div className="course-cart">
      <div className="video-container">
        <ReactPlayer
          url={"https://youtu.be/-KUPIKbjX-4?si=AyqSKNij8j_l3qLO"}
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="course-info">
        <span className="course-type">Fontend</span>
        <p className="course-description">
          {" "}
          Dignissimos ad necessitatibus delectus nisi adipisci!
        </p>
      </div>

      <div className="progress"></div>

      <div className="instractor-info">
        <div className="dp-container">
          <img src={dp} alt="" />
        </div>
        <div className="other-info">
          <p className="name">Sombhu Das</p>
          <p className="role">Software developer</p>
        </div>
      </div>

      <div className="course-other-info">
        <p>Free</p>
        <div className="ratting">
          <span> 3.4 </span>
          <span className="star-container">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </span>
          <span>(300)</span>
        </div>
      </div>
    </div>
  );
}

export default CourseComponent;
