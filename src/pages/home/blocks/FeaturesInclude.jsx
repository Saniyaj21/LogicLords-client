import React from "react";
import tutorial1 from "../../../media/tutorial 2.png";
import tutorial2 from "../../../media/tutorial 3.png";
import tutorial3 from "../../../media/tutorial 4.png";
import tutorial4 from "../../../media/tutorial 5.png";

const FeaturesInclude = () => {
    return (
        <section id="featuresInclude">
            <h1>Features Include</h1>
            <div id="featuresInclude_content">
                <div className="itemContainer">
                    <img src={tutorial1} alt="tutorial 1" />
                    <div className="featuresDetails">
                        <h4>Code Reviews</h4>
                        <p>
                            We don’t just give you assignments, we review your
                            solutions and give you insightful feedbacks on your
                            code to enhance and reinforce your understanding.
                        </p>
                    </div>
                </div>
                <div className="itemContainer">
                    <img src={tutorial2} alt="tutorial 2" />
                    <div className="featuresDetails">
                        <h4>Mentorship</h4>
                        <p>
                            Even without being in a physical class, we make it
                            possible for our students to ask questions and get
                            guidance through our seasoned and qualified mentors.
                        </p>
                    </div>
                </div>
                <div className="itemContainer">
                    <img src={tutorial3} alt="tutorial 3" />
                    <div className="featuresDetails">
                        <h4>Live Code Editor</h4>
                        <p>
                            Whether at home or on the go, you can still follow
                            your classes and practice with our easy-to-use code
                            editor. It works on both the web and mobile app.
                        </p>
                    </div>
                </div>
                <div className="itemContainer">
                    <img src={tutorial4} alt="tutorial 4" />
                    <div className="featuresDetails">
                        <h4>Community Forums</h4>
                        <p>
                            Just because you are learning online doesn’t mean
                            you have to be all alone. With our discussion forum,
                            you can share your opinions with other students and
                            even make friends.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesInclude;
