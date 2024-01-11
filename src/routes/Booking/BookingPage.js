import BookingForm from "./BookingForm";

function BookingPage(props) {
    return(
        <>
            <div className="form-container">
                <BookingForm {...props} />
            </div>
        </>
    );
}

export default BookingPage;