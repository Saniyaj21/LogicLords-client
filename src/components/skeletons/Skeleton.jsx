import "./Skeleton.scss";

const Skeleton = ({ height=20, width=100, borderRadious }) => {
	return (
		<div
			className='skeleton'
			style={{
				width: width,
				height: height,
				borderRadius: borderRadious,
			}}
		>
      
    </div>
	);
};

export default Skeleton;
