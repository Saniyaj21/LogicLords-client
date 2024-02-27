import HeadeContainer from "./blocks/HeadeContainer";
import RankCard from "./blocks/RankCard";
import SideBar from "./blocks/SideBar";
import "./leaderBoard.scss";

const LeaderBoard = () => {
	const TempArray = [
		{
			avatar:
				"https://res.cloudinary.com/dlkaxk4dm/image/upload/v1705551327/CloudGallery/hbntlahbhtaqehn9rnwl.jpg",
			name: "Saniyaj Mallik",
			institute: "Haldia Institute of Technology",
			points: 1000,
			rank: 150,
		},
		{
			avatar:
				"https://res.cloudinary.com/dlkaxk4dm/image/upload/v1705551327/CloudGallery/hbntlahbhtaqehn9rnwl.jpg",
			name: "Sombhu Das",
			institute: "Haldia Institute of Technology",
			points: 10,
			rank: 10,
		},
		{
			avatar:
				"https://res.cloudinary.com/dlkaxk4dm/image/upload/v1705551327/CloudGallery/hbntlahbhtaqehn9rnwl.jpg",
			name: "SabseBaraNamHa MeraSamjha",
			institute: "Haldia Institute of Technology or bhi hai",
			points: 10000,
			rank: 300,
		},
	];

	return (
		<section id='leader-board'>
			<div className='board-container'>
				<div className='sidebar'>
					<SideBar />
				</div>
				<div className='rank-container'>
					<div className='left-align-conatiner'>
						<HeadeContainer />

						<div className='rank-card-container'>
							<p>Participate in weekly challanges to push your rank up.</p>
							<br />
							{TempArray.map((item, index) => {
								return <RankCard item={item} key={index} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LeaderBoard;
