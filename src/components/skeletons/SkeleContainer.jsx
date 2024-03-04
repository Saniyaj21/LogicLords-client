import React from "react";
import "./SkeleContainer.scss";
const SkeleContainer = ({
	children,
	margin,
	paddingY = 0,
	paddingX = 0,
	gap,
	flexDirection,
}) => {
	return (
		<div
			className='skele-container'
			style={{
				margin,
				padding: `${paddingY}px ${paddingX}px`,
				gap,
				flexDirection,
			}}
		>
			{children}
		</div>
	);
};

export default SkeleContainer;
