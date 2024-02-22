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

function CourseComponent({
	thumbnail,
	courseType,
	courseDescription,
	instractorDp,
	instractorName,
	ratting = "",
	totalRattingAmmount = "",
	isHistory = false,
}) {
	useEffect(() => {}, []);

 

	return (
		<div className='course-cart'>
			<div className='video-container'>
				
				<img src={courseImg} alt='' />
			</div>

			<div className='course-info'>
				<span className='course-type'>Fontend</span>
				<p className='course-description nunito-6'>
					Dignissimos ad necessitatibus delectus nisi adipisci!
				</p>
			</div>

			{isHistory ? <div className='progress' id='progress'></div> : ""}

			<div className='instractor-info'>
				<div className='dp-container'>
					<img src={dp} alt='' />
				</div>
				<div className='other-info'>
					<p className='name'  >Sombhu Das</p>
					<p className='role'>Web developer</p>
				</div>
			</div>

			<div className='course-other-info' id='course-other-info'>
				<p>Free</p>
				<div className='ratting'>
					<div>
						<p className='nunito-6'>5 </p>
						<p className='star-container'>
							<Rate count={5} value={5} allowHalf disabled />
						</p>
					</div>
					<div>
						<p className='nunito-6 ammount-of-student'>(900)</p>
					</div>
				</div>
			</div>

			<div className='enroal-container'>
				<Link 
        // to={"/playlist/id"}
        >
					<button className='btn'>
						Enrole Now <BsArrowRight />
					</button>
				</Link>
			</div>
		</div>
	);
}

export default CourseComponent;
