import { FaGlobeAmericas } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
// css is in LeaderBoard.scss
const HeadeContainer = () => {
	return (
		<div className='head-option-container'>
			<div className=' rank-row nunito-6'>
				<FaGlobeAmericas />
				<span> Global Rank</span>
			</div>
			<div className='rank-row nunito-6 active-rank-row'>
				<IoSchoolSharp />
				<span> Institute Rank</span>
			</div>
		</div>
	);
};

export default HeadeContainer;
