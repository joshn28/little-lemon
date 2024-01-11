import logo from '../assets/footer-logo-nobg.png';

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <img src={logo} alt="Logo" />
                <nav className="footer-links">
                    <ul>
                        <li className="footer-heading">Doormat Navigation</li>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </ul>
                    <ul>
                        <li className="footer-heading">Contact</li>
                        <ul>
                            <li>123 Street, City, State</li>
                            <li>555-555-555</li>
                            <li>LittleLemon@fake.com</li>
                        </ul>
                    </ul>
                    <ul>
                        <li className="footer-heading">Social Media Links</li>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Tiktok</li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;