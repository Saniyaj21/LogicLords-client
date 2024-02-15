import "./header.scss";
import Logo from "../../../components/Logo";

const Header = () => {
    return (
        <header id="header">
            <div id="header-logo">
                <Logo />
            </div>
            <div id="menu">
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Projects</li>
                    <li>Leader Board</li>
                </ul>
            </div>
            <div id="hamburg">HAM</div>
        </header>
    );
};

export default Header;
