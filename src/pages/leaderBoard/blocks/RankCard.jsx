import "./RankCard.scss";
import coinIcon from "../../../media/logo2.png";
import TextOverFlowHandle from "../../../components/TextOverFlowHandle";

const RankCard = ({ item }) => {
	return (
		<div className='rank-card'>
            <span className="nunito-8">{item.rank} : </span>
			<img src={item.avatar} alt={item.name} />
			<div className='rank-card-content'>
				<div className="info-container">
					<h4><TextOverFlowHandle text={item.name} size={30} /></h4>
					<p><TextOverFlowHandle text={item.institute} size={30} /></p>
				</div>
				<div className="score-container">
					<img src={coinIcon} alt='' />
					<p className="nunito-6">{item.points}</p>
				</div>
			</div>
		</div>
	);
};

export default RankCard;
