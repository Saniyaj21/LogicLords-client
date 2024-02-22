import React from "react";
import "./courses.scss";
import buttonLogo from "./image/btn.svg";
import { Link } from "react-router-dom";
import searchLogo from "./image/searchLogo.svg";
import { IoMdSearch } from "react-icons/io";
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
          <button >
            <IoMdSearch />
          </button>
        </form>

      <div className="watching-history"></div>
       <CourseComponent/>
       <CourseComponent/>
      </div>

    </>
  );
}

export default Courses;
