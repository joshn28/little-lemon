import { useState, useEffect } from "react";
import logo from "../assets/Logo.svg";
import menuIcon from "../assets/hamburger menu.svg";
import { Link } from "react-router-dom";

function Header() {
    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1023;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <header>
            <Link to='/'><img src={logo} alt="restaurant logo" /></Link>
            <img src={menuIcon} alt="" className="menu" onClick={() => setVisible(!visible)}/>
            <nav style={{ visibility: visible || width > breakpoint ? "visible" : "hidden" }}>
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