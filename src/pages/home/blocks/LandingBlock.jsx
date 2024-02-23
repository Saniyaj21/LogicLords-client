import React from "react";
import bannerImg from "../../../media/banner1.png";
import { FaSearch } from "react-icons/fa";

const LandingBlock = () => {
    return (
        <section id="landingBlock">
            <div className="mainBlock">
                <div className="leftBlock">
                    <div className="logicText">
                        <h2 className="logicCode">while(true)&#123;</h2>
                        <div className="innerLogic">
                            <h2 className="logicCode">Learn;</h2>
                            <h2 className="logicCode">Build;</h2>
                        </div>
                        <h2 className="logicCode">&#125;</h2>
                    </div>
                    <div className="searchBar">
                        <input
                            type="text"
                            placeholder="Search for your desire courses..."
                        />
                        <button className="searchBtn">
                            <FaSearch className="icon" />
                        </button>
                    </div>
                </div>
                <div className="rightBlock">
                    <img src={bannerImg} alt="banner" />
                </div>
            </div>
            <div className="bottomBlock">
                <div className="box">
                    <p>5000+</p>
                    <p>Courses</p>
                </div>
                <div className="box">
                    <p>2000+</p>
                    <p>Tutors</p>
                </div>
                <div className="box">
                    <p>1000+</p>
                    <p>Students</p>
                </div>
            </div>
        </section>
    );
};

export default LandingBlock;
