import React from "react";
import "./courses.scss";
import buttonLogo from "./image/btn.svg";
import { Link } from "react-router-dom";
import searchLogo from "./image/searchLogo.svg";
import { IoMdSearch } from "react-icons/io";
import { PiStarFourFill } from "react-icons/pi";
import CourseComponent from "./components/CourseComponent";

function Courses() {
  return (
    <>
      <div className="course-page">
        <div className="course-image-container">
          <div className="content-container">
            <p> Online Course</p>
            <h3>Sharpen Your Skills With Professional Online Courses</h3>
            <Link>
              <button type="button">
                <p>Join Now</p> <img src={buttonLogo} alt="" />
              </button>
            </Link>
          </div>
        </div>
        <form className="search-container">
          <input
            type="text"
            placeholder="Search your course here..."
            required
          />
          <button>
            <IoMdSearch />
          </button>
        </form>

        <div className="course-container">
          <h3>Continue Watching </h3>
          <div className="course-list">
            <CourseComponent
              isHistory={true}
              progress="40%"
              courseType={"FontEnd"}
              courseDescription={
                "Beginner’s Guide to becoming a professional frontend developer"
              }
              instractorName={"Sombhu Das"}
              instractorRole={"Web Developer"}
            />
            <CourseComponent
              isHistory={true}
              progress="90%"
              courseType={"UI/UX design"}
              courseDescription={
                "Beginner’s Guide to becoming a professional frontend developer"
              }
              instractorName={"Pritam Paul"}
              instractorRole={"Web Developer"}
            />
            <CourseComponent
              isHistory={true}
              progress="40%"
              courseType={"FontEnd"}
              courseDescription={
                "Beginner’s Guide to becoming a professional frontend developer"
              }
              instractorName={"Sombhu Das"}
              instractorRole={"Web Developer"}
            />
            <CourseComponent
              isHistory={true}
              progress="70%"
              courseType={"BackEnd"}
              courseDescription={
                "Beginner’s Guide to becoming a professional frontend developer"
              }
              instractorName={"Saniyaj Mallik"}
              instractorRole={"Web Developer"}
             
            />
            
          </div>
        </div>

        <div className="course-container">
          <p>
            <PiStarFourFill /> <b>Courses</b>{" "}
          </p>
          <div className="course-list">
          <CourseComponent
              courseType={"FontEnd"}
              courseDescription={
                "Beginner’s Guide to becoming a professional frontend developer"
              }
              // ratting={"4.6"}
              totalRattingAmmount={"300"}
              instractorName={"Sombhu Das"}
              instractorRole={"Web Developer"}
            />
          <CourseComponent
              courseType={"FontEnd"}
              courseDescription={
                "Beginner’s Guide to becoming a professional frontend developer"
              }
              ratting={"4.6"}
              totalRattingAmmount={"300"}
              instractorName={"Sombhu Das"}
              instractorRole={"Web Developer"}
              isFree={false}
            />
          <CourseComponent
              courseType={"FontEnd"}
              courseDescription={
                "Beginner’s Guide to becoming a professional frontend developer"
              }
              ratting={"4.6"}
              totalRattingAmmount={"300"}
              instractorName={"Sombhu Das"}
              instractorRole={"Web Developer"}
            />
          <CourseComponent
              courseType={"FontEnd"}
              courseDescription={
                "Beginner’s Guide to becoming a professional frontend developer"
              }
              ratting={"4.6"}
              totalRattingAmmount={"300"}
              instractorName={"Sombhu Das"}
              instractorRole={"Web Developer"}
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
