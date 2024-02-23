import React from "react";
import reviewImage from "../../../media/review.png";

const UsersReview = () => {
    return (
        <section id="usersReview">
            <h2>What peoples are saying </h2>
            <div className="usersReview_container">
                <div className="reviewImage">
                    <img src={reviewImage} alt="review image" />
                </div>
                <div className="usersReview_slider"></div>
            </div>
        </section>
    );
};

export default UsersReview;
