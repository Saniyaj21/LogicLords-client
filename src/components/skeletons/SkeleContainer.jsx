import React from "react";
import "./SkeleContainer.scss";
const SkeleContainer = ({ children, margin, padding, gap, flexDirection }) => {
	return (
		<div
			className='skele-container'
			style={{
				margin,
				padding,
				gap,
				flexDirection,
			}}
		>
			{children}
		</div>
	);
};

export default SkeleContainer;
