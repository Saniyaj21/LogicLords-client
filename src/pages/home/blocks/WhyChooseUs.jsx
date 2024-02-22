import React from "react";
import whyUs from "../../../media/whyUs.png";
import group4 from "../../../media/Group 4.png";
import group3 from "../../../media/Group 3.png";

const WhyChooseUs = () => {
    return (
        <section id="whyChooseUs">
            <h1 className="titleBlock">Why Choose Us</h1>

            {/* first section  */}
            <div className="bodyBlock">
                <div className="leftBlock">
                    <img src={whyUs} alt="Why you Choose Us" />
                </div>
                <div className="rightBlock">
                    <div className="contentBlock">
                        <h3 className="contentBlock_title">
                            Detailed syllebus with localized content{" "}
                        </h3>
                        <p className="contentBlock_desc">
                            We've got a comprehensive syllabus that leaves
                            nothing untouched and with our localized contents
                            and examples, you are sure to grasp programming
                            concepts easier and faster even without prior
                            experience (i.e. as a beginner).
                        </p>
                    </div>
                </div>
            </div>
            {/* first section completed */}

            {/* ---------------------------------------- */}

            {/* second section  */}
            <div className="bodyBlock">
                <div className="leftBlock">
                    <div className="contentBlock">
                        <h3 className="contentBlock_title">
                            An Interactive Personalized Learning Experience
                        </h3>
                        <p className="contentBlock_desc">
                            With StackJunior's flexible learning options and
                            1-on-1 code review with seasoned tutors, your
                            learning is suited just for you.
                        </p>
                    </div>
                </div>
                <div className="rightBlock">
                    <img src={group4} alt="graphics 2" />
                </div>
            </div>
            {/* second section completed */}

            {/* ---------------------------------------- */}

            {/* third section  */}
            <div className="bodyBlock">
                <div className="leftBlock">
                    <img src={group3} alt="Why you Choose Us" />
                </div>
                <div className="rightBlock">
                    <div className="contentBlock">
                        <h3 className="contentBlock_title">
                            World-Class Learning with World-Class Jobs
                        </h3>
                        <p className="contentBlock_desc">
                            <b>At Logic-Lords,</b> we impact students with
                            industry-standard skills and trainings. We also
                            support them in getting jobs that are available from
                            around the globe. How cool is that?
                        </p>
                    </div>
                </div>
            </div>
            {/* third section completed */}

            {/* ---------------------------------------- */}
        </section>
    );
};

export default WhyChooseUs;
