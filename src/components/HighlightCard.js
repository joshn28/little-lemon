import { MdDeliveryDining } from "react-icons/md";

function HighlightCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt="" />
            <div className="card-body">
                <div className="card-info">
                    <p>{props.name}</p>
                    <p><span className="food-price">$ {props.price}</span></p>
                </div>
                <p className="card-description">{props.description}</p>
                <div>
                    <button className="card-button">Order a delivery <MdDeliveryDining /></button>
                </div>
            </div>
        </div>
    );
}

export default HighlightCard;