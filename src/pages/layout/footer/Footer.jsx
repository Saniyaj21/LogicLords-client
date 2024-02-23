import "./footer.scss";
import logo from "../../../media/logo2.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="topSection">
                <div className="columnsDevider">
                    <Link className="logoContainer" to={"/"}>
                        <img src={logo} alt="logiclords.dev" className="logo" />
                        <h1 className="nunito-8">
                            Logiclords<span className="nunito-4">.dev</span>
                        </h1>
                    </Link>
                    <p className="aboutText">
                        Is an ed-tech platform that trains kids and teenagers in
                        programming and other tech skills{" "}
                    </p>
                </div>
                <div className="columnsDevider">
                    <h3>Quick Links</h3>
                    <div className="linksContainer">
                        <Link>About</Link>
                        <Link>Courses</Link>
                        <Link>Career</Link>
                        <Link>FAQ</Link>
                        <Link>Privecy Policy</Link>
                        <Link>Send Feedback</Link>
                        <Link>Partnership</Link>
                    </div>
                </div>
                <div className="columnsDevider">
                    <h3>Social</h3>
                    <div className="socialContainer">
                        <div className="socialLinksIcon">
                            <Link to="/">
                                <FaFacebook className="icon" />
                            </Link>
                            <Link to="/">
                                <FaTwitter className="icon" />
                            </Link>
                            <Link to="/">
                                <FaInstagram className="icon" />
                            </Link>
                            <Link to="/">
                                <FaYoutube className="icon" />
                            </Link>
                        </div>
                        <div className="contact">
                            <h4>Contact US</h4>
                            <Link to="tel:+911010101010">+911010101010</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                &copy; 2022 - LogicLords All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
