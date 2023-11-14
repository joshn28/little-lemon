import Hero from './Hero';
import Highlights from './Highlights/Highlights';
import Testimonials from './Testimonials/Testimonials';
import About from './About';
import Footer from './Footer';
import '../styles/Homepage.scss';

function Homepage() {
    return (
        <main>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
        </main>
    );
}

export default Homepage;