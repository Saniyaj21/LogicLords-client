import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../media/logo1.png";
import profile from "../../../media/default_profile.png";
import "./header.scss";

const Header = () => {
    return (
        <header id="header">
            <Link className="logoContainer">
                <img src={Logo} alt="logiclords.dev" />
                <h1 className="nunito-8">
                    Logiclords<span className="nunito-4">.dev</span>
                </h1>
            </Link>
            <ul className="linksContainer">
                <Link to="/" className="currentLink">
                    <li>Home</li>
                </Link>
                <Link to="/courses">
                    <li>Courses</li>
                </Link>
                <Link to="/projects">
                    <li>Projects</li>
                </Link>
                <Link to="/leader-board">
                    <li> Leader Board</li>
                </Link>

                <div className="authContainer">
                    <Link to="/auth/login">
                        <button className="btn">Join Us</button>
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
