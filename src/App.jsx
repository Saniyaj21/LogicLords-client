import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/layout/header/Header";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Projects from "./pages/projects/Projects";
import Footer from "./pages/layout/footer/Footer";

import ErrorPage from "./pages/error/ErrorPage";
import LeaderBoard from "./pages/leaderBoard/LeaderBoard";

import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/user/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "./redux/slices/authSlice";
import { useEffect } from "react";
import Challenge from "./pages/challenge/Challenge";
import Test from "./Test";
import RecoverPassword from "./pages/auth/components/forgotPassword/RecoverPassword";
import AddCourse from "./pages/admin/AddCourse";
import AddVideo from "./pages/admin/AddVideo";

function App() {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector(selectUser);
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch, isAuthenticated]);

    return (
        <Router>
            <Header />
            <ToastContainer />
            <Routes>
                {/* Restricted routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="/" element={<Home />} exact />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/password/recover" element={<RecoverPassword />} />
                <Route path="/courses" element={<Courses />} />

                {/* <Route path='/projects' element={<Projects />} />
				<Route path='/leaderboard' element={<LeaderBoard />} />
				<Route path='/challenges' element={<Challenge />} />
				<Route path='/test' element={<Test />} /> */}

                <Route path="/*" element={<ErrorPage />} />

                <Route path="/admin/add-course" element={<AddCourse />} />
                <Route path="/admin" element={<AddVideo />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
