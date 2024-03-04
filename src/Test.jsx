import React from "react";
import Skeleton from "./components/skeletons/Skeleton";
import SkeleContainer from "./components/skeletons/SkeleContainer";

const Test = () => {
	return (
		<div>
			<SkeleContainer margin={10} padding={10} gap={10} flexDirection='column'>
				<Skeleton height={20} width={20} borderRadious='50%' />
				<Skeleton height={5} width={200} borderRadious={2} />
				<Skeleton height={20} width={200} borderRadious={5} />
				<SkeleContainer flexDirection='column' gap={5} paddingX={120}>
					<Skeleton borderRadious="50%" height={40} width={40}/>
					<Skeleton/>
					<Skeleton/>
				</SkeleContainer>
			</SkeleContainer>
		</div>
	);
};

export default Test;
