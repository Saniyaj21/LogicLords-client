import "./progress.scss";

import { FaLock } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
const Progress = ({step}) => {
	return (
		<div className='progress-main'>
           
			<div className={`circle ${step >= 1? "active-circle":""}`}>
				<div>
					{/* <i className='fa-solid fa-envelope'></i> */}
					<MdAttachEmail />
				</div>
			</div>

			<div className={`line ${step >= 1? "active-line":""}`}></div>

			<div className={`circle ${step >= 2? "active-circle":""}`}>
				<div>
				<MdVerified/>
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
