import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to='/'><img src={logo} alt="restaurant logo" /></Link>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link to='/reserve-a-table'>Reservations</Link></li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;