import React from "react";
import leftImage from "../../../media/app 1.png";
import rightImage from "../../../media/app 2.png";
import playstoreLogo from "../../../media/google-play-badge 1.png";
import { Link } from "react-router-dom";

const DownloadApp = () => {
    return (
        <section id="downloadApp">
            <img src={leftImage} alt="left art" className="leftImage" />
            <div className="appDetails">
                <h1>Download LogicLords App</h1>
                <p>
                    Whether at home or on the go, LogicLords wants you to keep
                    learning. Hence, the LogicLords app.
                </p>
                <Link to="/">
                    <img src={playstoreLogo} alt="" className="playstoreLogo" />
                </Link>
            </div>
            <img src={rightImage} alt="" className="rightImage" />
        </section>
    );
};

export default DownloadApp;
