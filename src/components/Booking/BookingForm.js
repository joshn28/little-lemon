import { useState } from 'react';
import '../../styles/BookingPage.scss';

function BookingForm() {
    const [form, setForm] = useState({
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday',
    });

    const availableTimes = [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form)
    }

    function minDate() {
        let today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Reserve a table</h1>
            <div>
                <label htmlFor="res-date">Choose a date</label>
                <input type="date" id="res-date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} min={minDate()}/>
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select name="res-time" id="res-time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                    {availableTimes.map((time, i) => <option key={i}>{time}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="guests"># of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}/>
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select name="occasion" id="occasion" value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <button>Make your reservation</button>
        </form>
    );
}

export default BookingForm;