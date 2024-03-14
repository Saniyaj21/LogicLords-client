// ReviewSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./ReviewSlider.scss";

const ReviewSlider = () => {
    return (
        <div className="review-slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                effect={"cube"}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                loop={true}
                autoplay={{ delay: 1000 }} // autoplay with a delay of 5 seconds
            >
                <SwiperSlide>
                    <div className="review-slide">
                        <h2>Review 1</h2>
                        <p>This is the first review.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-slide">
                        <h2>Review 2</h2>
                        <p>This is the second review.</p>
                    </div>
                </SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>
        </div>
    );
};

export default ReviewSlider;
