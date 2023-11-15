import '../../styles/BookingPage.scss';

function BookingForm() {
    return (
        <form>
            <h1>Reserve a table</h1>
            <div>
                <label htmlFor="res-date">Choose a date</label>
                <input type="date" id="res-date"/>
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select name="res-time" id="res-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>
            <div>
                <label htmlFor="guests"># of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select name="occasion" id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <button>Make your reservation</button>
        </form>
    );
}

export default BookingForm;