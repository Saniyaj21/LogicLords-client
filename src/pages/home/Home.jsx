import DownloadApp from "./blocks/DownloadApp";
import FeaturesInclude from "./blocks/FeaturesInclude";
import LandingBlock from "./blocks/LandingBlock";
import QuickTutorials from "./blocks/QuickTutorials";
import UsersReview from "./blocks/UsersReview";
import WhyChooseUs from "./blocks/WhyChooseUs";
import "./home.scss";

const Home = () => {
    return (
        <div id="home">
            <LandingBlock />
            <WhyChooseUs />
            <QuickTutorials />
            <FeaturesInclude />
            <UsersReview />
            <DownloadApp />

            {/* <div className='container'>
				<h3 className="nunito-6">.btn-sec and .btn</h3>
				<button className='btn-sec'>Hover Me</button>
				<button className='btn'>Get Started</button>
			</div> */}
            {/* <h1>Home Component</h1> */}
        </div>
    );
};

export default Home;
