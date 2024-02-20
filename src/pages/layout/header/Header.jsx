import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import Logo from "../../../media/logo1.png";
import profile from "../../../media/default_profile.png";
import "./header.scss";

const Header = () => {
    const [hambergerOn, setHambergerOn] = useState(true);

    return (
        <header id="header">
            <Link className="logoContainer" to={"/"}>
                <img src={Logo} alt="logiclords.dev" />
                <h1 className="nunito-8">
                    Logiclords<span className="nunito-4">.dev</span>
                </h1>
            </Link>

            <ul
                // className="linksContainer"
                className={
                    hambergerOn
                        ? "linksContainer"
                        : "linksContainer hambergerOn"
                }
            >
                <div className="profileContainerMobile">
                    <Link to="/profile/:uid">
                        <img src={profile} alt="profile" />
                    </Link>
                </div>

                <Link to="/" className="currentLink">
                    <li>Home</li>
                </Link>
                <Link to="/courses">
                    <li>Courses</li>
                </Link>
                <Link to="/projects">
                    <li>Projects</li>
                </Link>
                <Link to="/leaderboard">
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
            <div
                className="hamberger"
                onClick={() => setHambergerOn(!hambergerOn)}
            >
                {hambergerOn ? (
                    <IoMenu className="icon" />
                ) : (
                    <FaXmark className="icon" />
                )}
            </div>
        </header>
    );
};

export default Header;
