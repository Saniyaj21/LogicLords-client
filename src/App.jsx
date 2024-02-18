import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./pages/layout/header/Header";
import Footer from "./pages/layout/footer/Footer";
import Leader_Board from "./pages/leader_Board/Leader_Board";
import GlobalRank from "./pages/leader_Board/leader_Board_Layout/GlobalRank";
import InstituteRank from "./pages/leader_Board/leader_Board_Layout/InstituteRank";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Routes>
				<Route path='/leader_Board' element={<Leader_Board/>} />
				<Route path='/leader_Board/global_Rank' element={<GlobalRank/>} />
				<Route path='/leader_Board/Institute_Rank' element={<InstituteRank/>} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
