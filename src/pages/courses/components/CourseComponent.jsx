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

function CourseComponent({thumbnail , courseType , courseDescription , instractorDp , instractorName , ratting="" , totalRattingAmmount="" , isHistory=false }) {
  
    useEffect(()=>{
        const progressBar = document.getElementById("progress")
        const otherInfo = document.getElementById("course-other-info")
        if(isHistory){
            progressBar.style.display ="block";
            otherInfo.style.display="none"
        }
        else{
            progressBar.style.display ="none";
            otherInfo.style.display="block"
        }

    },[])

  return (
    <div className="course-cart">
      <div className="video-container">
        {/* <ReactPlayer
          url={"https://youtu.be/-KUPIKbjX-4?si=AyqSKNij8j_l3qLO"}
          width={"100%"}
          height={"100%"}
        /> */}
        <img src={courseImg} alt="" />
      </div>

      <div className="course-info">
        <span className="course-type">Fontend</span>
        <p className="course-description">
          Dignissimos ad necessitatibus delectus nisi adipisci!
        </p>
      </div>


      <div className="progress" id="progress"></div>

      <div className="instractor-info">
        <div className="dp-container">
          <img src={dp} alt="" />
        </div>
        <div className="other-info">
          <p className="name">Sombhu Das</p>
          <p className="role">Web developer</p>
        </div>
      </div>

      <div className="course-other-info" id="course-other-info">
        <p>Free</p>
        <div className="ratting">
          <div>
            <p className="nunito-6">5 </p>
            <p className="star-container">
              <Rate count={5} value={5} allowHalf disabled />
            </p>
          </div>
          <div>
            <p className="nunito-6 ammount-of-student">(900)</p>
          </div>
        </div>
      </div>

      <div className="enroal-container">
        <Link>
          Enrole Now <BsArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default CourseComponent;
