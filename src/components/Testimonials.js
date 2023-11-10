import TestimonialCard from "./TestimonialCard";

const testimonialData = [
    {
        rating: 5,
        name: 'Lily Chang',
        review: "Exquisite flavors in every dish! The restaurant's attention to detail in their culinary creations is unmatched. From the first bite to the last, I was in a paradise of taste. A definite must-visit for any food enthusiast!",
    },
    {
        rating: 5,
        name: 'Max Reed',
        review: "A culinary journey worth experiencing! The ambiance, service, and, most importantly, the food, surpassed all expectations. Each plate was a masterpiece, a true symphony of flavors that delighted my taste buds. A gem in the world of dining!",
    },
    {
        rating: 5,
        name: 'Zoe Lane',
        review: "What a delightful find! The restaurant's atmosphere is charming, and the food is exceptional. Every bite felt like a celebration of taste and innovation. The staff's hospitality added an extra layer of warmth to an already fantastic dining experience.",
    },
    {
        rating: 5,
        name: 'Eli Cruz',
        review: "Absolutely fantastic! The menu diversity and the quality of the food were outstanding. The service was impeccable, and the overall experience was nothing short of memorable. A place where passion for food meets excellence in execution."
    }
];

function Testimonials() {
    return (
        <section id="testimonials">
            <div>
                <h2>Testimonials</h2>
                <div className="testimonials-card-container">
                    {testimonialData.map((person, i) => <TestimonialCard {...person} key={person.name} />)}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;