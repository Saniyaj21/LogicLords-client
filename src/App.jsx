import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/layout/header/Header";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Projects from "./pages/projects/Projects";
import Footer from "./pages/layout/footer/Footer";
import ErrorPage from "./pages/error/ErrorPage";
import Leader_Board from "./pages/leader_Board/Leader_Board";
import GlobalRank from "./pages/leader_Board/leader_Board_Layout/GlobalRank";
import InstituteRank from "./pages/leader_Board/leader_Board_Layout/InstituteRank";
import LeaderBoard from "./pages/leaderBoard/LeaderBoard";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} exact />
				<Route path='/courses' element={<Courses />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/leaderboard' element={<LeaderBoard />} />
				{/* <Route path="/leader-board" element={<Leader_Board />} /> */}
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
