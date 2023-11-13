import imageA from '../assets/Mario-and-Adrian-A.jpg';
import imageB from '../assets/Mario-and-Adrian-b.jpg';

function About() {
    return (
        <section id='about'>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lacus sodales, elementum quam a, rutrum arcu. Nulla ut pretium augue. In cursus odio eu elit tempus imperdiet. Fusce in nisl maximus, volutpat nisi vitae, finibus dolor. Vivamus varius, arcu quis sagittis sollicitudin, quam nulla suscipit dolor, nec dignissim leo erat nec odio.
                </p>
            </div>
            <div>
                <img src={imageA} alt="Two restaurant chefs conversing" />
                <img src={imageB} alt="Two restaurant chefs smiling" />
            </div>
        </section>
    );
}

export default About;