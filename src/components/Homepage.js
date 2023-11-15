import Hero from './Hero';
import Highlights from './Highlights/Highlights';
import Testimonials from './Testimonials/Testimonials';
import About from './About';
import '../styles/Main.scss';
import '../styles/Testimonials.scss';
import '../styles/About.scss';

function Homepage() {
    return (
        <main>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    );
}

export default Homepage;