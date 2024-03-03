import "./progress.scss";
import { HiOutlineMail } from "react-icons/hi";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
const Progress = ({step}) => {
	return (
		<div className='progress-main'>
           
			<div className={`circle ${step >= 1? "active-circle":""}`}>
				<div>
					{/* <i className='fa-solid fa-envelope'></i> */}
					<HiOutlineMail />
				</div>
			</div>

			<div className={`line ${step >= 1? "active-line":""}`}></div>

			<div className={`circle ${step >= 2? "active-circle":""}`}>
				<div>
				<FaCircleArrowRight/>
				</div>
			</div>
			<div className={`line ${step >= 2? "active-line":""}`}></div>

			<div className={`circle ${step >= 3? "active-circle":""}`}>
				<div>
					<FaLock />
				</div>

			</div>
		</div>
	);
};

export default Progress;
