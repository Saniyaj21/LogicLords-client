import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaDiscourse } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import Logo from "../../../media/Logo1.png";
import profile from "../../../media/default_profile.png";
import "./header.scss";

const Header = () => {
    return (
        <header id="header">
            <div className="logoContainer">
                <img src={Logo} alt="logiclords.dev" />
                <h1 className="nunito-8">
                    Logiclords<span className="nunito-4">.dev</span>
                </h1>
            </div>
            <ul className="linksContainer">
                <Link to="/" className="currentLink">
                    <li>
                        <FaHome className="icons" /> Home
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <FaDiscourse className="icons" /> Courses
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <FaProjectDiagram className="icons" />
                        Projects
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <MdLeaderboard className="icons" /> Leader Board
                    </li>
                </Link>

                <div className="authContainer">
                    <Link to="/auth/login" className="btn">
                        Login
                    </Link>

                    <div className="profileContainer">
                        <Link to="/profile/:uid">
                            <img src={profile} alt="profile" />
                        </Link>
                    </div>
                    {/* <Link to="/auth/register">Register</Link> */}
                </div>
            </ul>
        </header>
    );
};

export default Header;
