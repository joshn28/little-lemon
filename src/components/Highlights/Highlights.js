import HighlightCard from "./HighlightCard";

const foodData = [
    {
        name: "Greek salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: require('../../assets/greek-salad.jpg'),
    },
    {
        name: "Bruchetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: require('../../assets/bruchetta.jpg'),
    },
    {
        name: "Lemon Dessert",
        price: 5.00,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: require('../../assets/lemon-dessert.jpg'),
    }
];

function Highlights() {
    return (
        <section id="highlights">
            <div className="highlights-heading">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="cards-container">
                {foodData.map((item) => {
                    return <HighlightCard key={item.name} {...item} />;
                })}
            </div>
        </section>
    );
}

export default Highlights;