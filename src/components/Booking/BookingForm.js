import { useState } from 'react';
import '../../styles/BookingPage.scss';

function minDate() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function BookingForm(props) {
    const [form, setForm] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });

    function handleSubmit(e) {
        e.preventDefault();
        props.submitForm(form);
    }

    function setDate(e) {
        const date = e.target.value;
        setForm({ ...form, date});
        props.dispatch({ type: 'update_times', date });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Reserve a table</h1>
            <div>
                <label htmlFor="res-date">Choose a date</label>
                <input type="date" id="res-date" value={form.date} onChange={setDate} min={minDate()}/>
            </div>
            <div>
                <label htmlFor="res-time">Choose a time</label>
                <select disabled={!form.date} name="res-time" id="res-time" defaultValue="default" onChange={(e) => setForm({ ...form, time: e.target.value })}>
                    <option value="default" disabled>-- select a time --</option>
                    {props.availableTimes.map((time, i) => <option key={i}>{time}</option>)}
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
            <button disabled={!form.date || !form.time}>Make your reservation</button>
        </form>
    );
}

export default BookingForm;