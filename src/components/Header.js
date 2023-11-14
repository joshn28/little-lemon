import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src={logo} alt="restaurant logo" />
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><Link to='/reserve-a-table'>Reservations</Link></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;