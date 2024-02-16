import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./pages/layout/header/Header";
import Footer from "./pages/layout/footer/Footer";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
