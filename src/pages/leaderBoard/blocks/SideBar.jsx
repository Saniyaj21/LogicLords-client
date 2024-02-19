import "./SideBar.scss";
import { MdLeaderboard } from "react-icons/md";
import { GiPodiumWinner } from "react-icons/gi";
import { TiHome } from "react-icons/ti";

const SideBar = () => {
	return (
		<>
			<div className='leader-board-row nunito-6  sidebar-row active-sidebar'>
				<MdLeaderboard />
				<span> Leaderboard</span>
			</div>
			<div className='weekly-winners-row nunito-6 sidebar-row'>
				<GiPodiumWinner />
				<span>Weekly winners</span>
			</div>
			<div className='home-row nunito-6 sidebar-row'>
				<TiHome />
				<span>Home</span>
			</div>
		</>
	);
};

export default SideBar;
