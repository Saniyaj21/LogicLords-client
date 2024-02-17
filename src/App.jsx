import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/layout/header/Header";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Projects from "./pages/projects/Projects";
import Footer from "./pages/layout/footer/Footer";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/courses" element={<Courses />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/leader-board" element={<Home />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
