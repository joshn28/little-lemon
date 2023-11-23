import { MdDeliveryDining } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function HighlightCard(props) {
    return (
        <div className="card">
            <LazyLoadImage src={props.image} alt="" effect="blur" />
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