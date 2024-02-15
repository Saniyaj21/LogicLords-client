import "./header.scss";
import logo from "../../../media/Logo.png";
// import namedLogo from "../../../media/TextLogo.png";

const Header = () => {
    return (
        <div id="header">
            <div className="logo">
                <img src={logo} alt="logiclords.dev" />
                {/* <img src={namedLogo} alt="logiclords.dev" /> */}
            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Notes</li>
                    <li>Leaderboard</li>
                </ul>
                <ul className="authLinks">
                    <li>Login</li>
                    <li>Register</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
