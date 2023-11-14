import food from "../assets/restaurantfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <section id="hero-section">
                <div id="hero-container">
                    <div>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned <br />
                        Mediterranean restaurant, <br />
                        focused on traditional <br />
                        recipes served with a modern <br />
                        twist.</p>
                        <Link to='/reserve-a-table'><button>Reserve a Table</button></Link>
                    </div>
                    <div className="crop-container">
                        <img src={food} alt="restaurant food" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;