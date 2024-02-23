import React from "react";
import QuickTutorialsImage from "../../../media/Quick-Tutorials.png";

const QuickTutorials = () => {
    return (
        <section id="quickTutorials">
            <div className="containerBox">
                <div className="textContainer">
                    <h2 className="titleText">QUICK TUTORIALS</h2>
                    <p className="contentText">
                        <b>At StackJunior</b>, acquire{" "}
                        <b>industry-relevant tech skills</b>&nbsp; such as
                        programming, software development, data science, cloud
                        computing and more to{" "}
                        <b>become a world-class IT professional.</b>
                    </p>
                </div>
                <div className="imageContainer">
                    <img src={QuickTutorialsImage} alt="Quick-Tutorials" />
                </div>
            </div>
        </section>
    );
};

export default QuickTutorials;
