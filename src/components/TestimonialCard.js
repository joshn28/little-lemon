import { AiOutlineStar } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

function TestimonialCard(props) {
    return (
        <div className="testimonial-card">
            <span>
                {Array(props.rating).fill(true).map((_, i) => <AiOutlineStar key={`${props.name}-star-${i}`}/>)}
            </span>
            <div>
                <RxAvatar className="avatar-icon" />
                <p>{props.name}</p>
            </div>
            <p>{props.review}</p>
        </div>
    );
}

export default TestimonialCard;