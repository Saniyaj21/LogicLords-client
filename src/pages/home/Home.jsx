import DownloadApp from "./blocks/DownloadApp";
import FeaturesInclude from "./blocks/FeaturesInclude";
import LandingBlock from "./blocks/LandingBlock";
import QuickTutorials from "./blocks/QuickTutorials";
import UsersReview from "./blocks/UsersReview";
import WhyChooseUs from "./blocks/WhyChooseUs";
import "./home.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div id="home">
            <LandingBlock />
            <WhyChooseUs />
            <QuickTutorials />
            <FeaturesInclude />
            <UsersReview />
            <DownloadApp />

         


		</div>
	);

};

export default Home;
