import "./home.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

const Home = () => {
	const { isAuthenticated, user } = useSelector(selectUser);

	return (
		<div id='home'>
			{/* <div className='container'>
				<h3 className="nunito-6">.btn-sec and .btn</h3>
				<button className='btn-sec'>Hover Me</button>
				<button className='btn'>Get Started</button>
			</div> */}
			<h1>Home Component</h1>
			<Link to={'/profile'}>Profile</Link>
			{user?.name}
		</div>
	);
};

export default Home;
